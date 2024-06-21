import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { TipoBanco } from "../../../../../tipos/tipos";
import { useBancoFinal } from "../../../../../states/statesProductoFinal";
import { Toaster, toast } from "sonner";
import { InsertarCarrito } from "../insertarCarrito";
import Euro from "../../euro";
import BotonCompraBanco from "./botonCompraBanco";
import { InsertarCarritoLocal } from "../insertarCarritoLocal";

export default function SeccionPrecioBanco({
  bancoSeleccionado,
}: {
  bancoSeleccionado: TipoBanco[];
}) {
  //Estados globales
  const { banco, setPrecioBancoFinal, setCantidadBancos } = useBancoFinal();

  //Estados para concretar el precio final
  const [cantidad, setCantidad] = useState(1);
  const [precioBanco, setPrecioBanco] = useState(0);
  const [mostrarCompra, setMostrarCompra] = useState(false);
  const [guardarCarro, setGuardarCarro] = useState(false);

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const precioFinal = () => {
    const precio = Math.round(precioBanco * cantidad);
    return precio;
  };

  //Setea las ultimas opciones antes de mandar el producto final a comprar
  const handleClick = async () => {
    await new Promise<void>((resolve) => {
      setPrecioBancoFinal(Math.round(precioBanco));
      setCantidadBancos(cantidad);
      resolve();
    });
  };

  //Aqui se calcula el precio del banco en funcion de la seleccion final
  useEffect(() => {
    let costeModulosTotal = 0;
    //Calcular el precio del material
    banco.modulos.forEach((modulo) => {
      costeModulosTotal += modulo.precioModulo * modulo.cantidad;
    });
    if (banco.acabadoBastidor === "Laca") {
      setPrecioBanco(costeModulosTotal * 1.2);
    } else {
      setPrecioBanco(costeModulosTotal);
    }

    //Solo mostramos la opcion de compra cuando todas las selecciones esten definidas
    if (banco.colorBastidor && banco.colorTapizado) {
      setMostrarCompra(true);
    } else {
      setMostrarCompra(false);
    }
  }, [banco]);

  useEffect(() => {
    // localStorage.clear()
    //Funciones para agregar lo elegido a la BBDD
    const handleCarrito = async () => {
      const result = await InsertarCarrito(banco);
      // Si la consulta da error
      if (!result.success) {
        toast.error(result.message);
      } else {
        const resultLocal = await InsertarCarritoLocal(banco);
        if (resultLocal.success) {
          let carritoIds = localStorage.getItem("carrito");

          if (carritoIds !== null && resultLocal.idGenerado !== undefined) {
            let idsArray: string[] = JSON.parse(carritoIds); // Convertir a array
            idsArray.push(resultLocal.idGenerado); // Agregar el nuevo ID al array
            localStorage.setItem("carrito", JSON.stringify(idsArray));
          } else {
            localStorage.setItem("carrito", JSON.stringify([resultLocal.idGenerado]));
          }
        } else {
          toast.error("Hubo un error al procesar la solicitud.");
          return
        }
      }
      toast.success(result.message);
    };
    //Solo lanzamos la funcion si hemos clickado en Añadir Carro
    if (guardarCarro === true) {
      handleCarrito();
    }
  }, [guardarCarro]);

  useEffect(() => {
    setPrecioBancoFinal(Math.round(precioBanco));
    setCantidadBancos(cantidad);
  }, [cantidad, precioBanco]);

  return (
    <section className="bg-fondoSecundario flex flex-col gap-4 p-8 col-span-2 lg:col-span-1">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h1 className="text-3xl">
            Total: {precioFinal()}
            <Euro />
          </h1>
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
          <div className="bg-fondoSecundario w-8 p-2 flex justify-center ">
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
        <section className="flex lg:flex-col gap-4 w-full lg:w-auto justify-center lg:mt-0 mt-6">
          {mostrarCompra ? (
            <>
              <div
                className="bg-fondoTerciario border-[1px] border-colorBase p-2 w-32 flex justify-center hover:bg-colorBase cursor-pointer flex-grow"
                onClick={() => {
                  setGuardarCarro(true);
                }}
              >
                Añadir al carro
              </div>
              <BotonCompraBanco banco={banco} />
            </>
          ) : (
            <p className="w-32 text-center text-red-400">
              Defina los acabados del banco
            </p>
          )}
        </section>
      </div>
      <Toaster position="top-right" richColors />
    </section>
  );
}
