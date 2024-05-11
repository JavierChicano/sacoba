import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { TipoMesa } from "../../../../../tipos/tipos";
import {
  useIndexMesaFinal,
  useMesaFinal,
} from "../../../../../states/statesProductoFinal";
import { InsertarCarrito } from "../insertarCarrito";
import { Toaster, toast } from "sonner";
import { usuarios } from "@/db/schema";

export default function SeccionPrecio({
  mesaSeleccionada,
}: {
  mesaSeleccionada: TipoMesa[];
}) {
  //Estados globales
  const { mesa, setPrecioMesaFinal, setCantidadMesas } = useMesaFinal();
  const { index } = useIndexMesaFinal();

  //Estados para concretar el precio final
  const [cantidad, setCantidad] = useState(1);
  const [precioMesa, setPrecioMesa] = useState(0);
  const [precioAltura, setPrecioAltura] = useState(0);
  const [precioGrupo, setPrecioGrupo] = useState(0);
  const [guardarCarro, setGuardarCarro] = useState(false);

  const ajustarNombre = () => {
    const modelo = index.acabado.toLowerCase().replace(/ (\w+)$/i, " g1");
    return modelo;
  };

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const precioFinal = () => {
    const precio = Math.trunc(
      (precioMesa + precioAltura) * cantidad * precioGrupo
    );
    return precio;
  };

  //Aqui se calcula el precio de la mesa en funcion de la seleccion final
  useEffect(() => {
    let material = "";
    if (
      index.acabado.startsWith("Silestone") ||
      index.acabado.startsWith("Dekton")
    ) {
      material = ajustarNombre();
    } else {
      material = index.acabado.toLowerCase();
    }

    //Calcular el precio del material
    mesaSeleccionada.forEach((mesa) => {
      if (mesa.materialTapa === material) {
        const precios = mesa.precio.split(",");
        const precio = parseFloat(precios[index.dimension]);
        setPrecioMesa(precio);
      }
    });

    //Calcular el incremento del grupo (si aplica)
    if (index.grupo && index.grosor) {
      const precioGrupo = calculoGrupo(index.grupo, material, index.grosor);
      if (precioGrupo !== undefined) {
        setPrecioGrupo(precioGrupo);
      }
    }

    //Calcular el precio de la altura
    if (index.altura == 0) {
      setPrecioAltura(0);
    } else if (index.altura == 1) {
      setPrecioAltura(25);
    } else if (index.altura == 2) {
      setPrecioAltura(40);
    }
  }, [mesa, index, mesaSeleccionada]);

  useEffect(() => {
    // localStorage.clear()
    //Funciones para agregar lo elegido a la BBDD
    const handleCarrito = async () => {
      const result = await InsertarCarrito(mesa);
      // Si la consulta da error
      if (!result.success) {
        toast.error(result.message);
      } else {
        if (result.usuario === "no iniciado") {
          const mesaJson = JSON.stringify(mesa);
          // Guardamos la seleccion en el localStore
          let carrito = localStorage.getItem("carrito");
          //Comprueba si ya hay objetos almacenados
          if (carrito !== null) {
            let carritoObj = JSON.parse(carrito);
            if (!Array.isArray(carritoObj)) {
              carritoObj = [carritoObj]; // Si no es un array, lo convertimos en uno
          }
          
          let nuevoCarrito = [...carritoObj, mesa];
            console.log(nuevoCarrito);
            localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

          } else {
            //Si es el primer objeto en almacenarse
            localStorage.setItem("carrito", mesaJson);
          }
        }
        toast.success(result.message);
      }
    };
    //Solo lanzamos la funcion si hemos clickado en Añadir Carro
    if (guardarCarro === true) {
      handleCarrito();
    }
  }, [mesa.precio]);

  const handleComprar = async () => {
    // AQUI HAY  Q HACER MAS PROCESOS
  };
  return (
    <>
      <section className="bg-fondoSecundario flex flex-col gap-4 p-8 ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl">Total: {precioFinal()}€</h1>
            {/* <p className="text-sm flex justify-end"> Iva incluido*</p> */}
          </div>
          <section className="flex w-36 border-[1px] border-fondoTerciario justify-between">
            <div
              className="bg-fondoTerciario p-2 flex justify-center hover:bg-colorBase cursor-pointer"
              onClick={() => {
                disminuirCantidad();
              }}
            >
              <IconMinus stroke={2} />
            </div>
            <div className="bg-fondoSecundario w-8  p-2 flex justify-center ">
              {cantidad}
            </div>
            <div
              className="bg-fondoTerciario p-2 flex justify-center hover:bg-colorBase cursor-pointer"
              onClick={() => {
                aumentarCantidad();
              }}
            >
              <IconPlus stroke={2} />
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <div
              className="bg-fondoTerciario border-[1px] border-colorBase p-2 w-32 flex justify-center hover:bg-colorBase cursor-pointer"
              onClick={() => {
                setPrecioMesaFinal(precioFinal());
                setCantidadMesas(cantidad);
                setGuardarCarro(true);
              }}
            >
              Añadir al carro
            </div>
            {/* Este te tiene q llevar a la pagina de compra */}
            <div
              className="bg-colorBase p-2 w-32 flex justify-center cursor-pointer"
              onClick={() => {
                setPrecioMesaFinal(precioFinal());
                setCantidadMesas(cantidad);
                handleComprar();
              }}
            >
              Comprar
            </div>
          </section>
        </div>
      </section>
      <Toaster position="top-right" richColors />
    </>
  );
}

export const calculoGrupo = (
  grupo: string,
  acabado: string,
  grosor: string
) => {
  switch (acabado) {
    case "silestone g1":
      if (grosor === "12mm") {
        switch (grupo) {
          case "g1":
            return 1;
          case "g2":
            return 1.05;
          case "g3":
            return 1.1;
          case "g4":
            return 1.15;
          case "g5":
            return 1.2;
          case "g6":
            return 1.3;
        }
      } else if (grosor === "20mm") {
        switch (grupo) {
          case "g1":
            return 1.05;
          case "g2":
            return 1.1;
          case "g3":
            return 1.15;
          case "g4":
            return 1.35;
          case "g5":
            return 1.4;
          case "g6":
            return 1.5;
        }
      }
      break;

    case "dekton g1":
      if (grosor === "8mm") {
        switch (grupo) {
          case "g1":
            return 1;
          case "g2":
            return 1.1;
          case "g3":
            return 1.15;
          case "g4":
            return 1.3;
        }
      } else if (grosor === "12mm") {
        switch (grupo) {
          case "g1":
            return 1.15;
          case "g2":
            return 1.3;
          case "g3":
            return 1.3;
          case "g4":
            return 1.5;
        }
      }
    default:
      return 1;
  }
};
