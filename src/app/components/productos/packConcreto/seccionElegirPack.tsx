import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrecioAcumulado } from "../../../../../states/states";
import Link from "next/link";
import { usePackFinal } from "../../../../../states/statesProductoFinal";
import { Toaster, toast } from "sonner";
import { InsertarCarrito } from "../insertarCarrito";

export default function ElegirPack({
  mesa,
  modelo,
  formato,
}: {
  mesa: string;
  modelo: string;
  formato: string;
}) {
  //Estados globales
  const { setPackResto, pack } = usePackFinal();
  const { precioAcumulado, setPrecioAcumulado } = usePrecioAcumulado();

  //Estados locales para guardar la seleccion momentaneamente
  const [packSeleccionado, setPackSeleccionado] = useState("Mesa y 2 sillas");
  const [cantidad, setCantidad] = useState(0);
  const [cantidadSillas, setCantidadSillas] = useState(0);
  const [precioSillas, setPrecioSillas] = useState(0);
  const [guardarCarro, setGuardarCarro] = useState(false);

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
    console.log("modelo", modelo + formato);
  };
  useEffect(() => {
    if (packSeleccionado == "Mesa") {
      setPrecioSillas(0);
      setCantidadSillas(0);
    } else if (packSeleccionado == "Mesa y 2 sillas") {
      setPrecioSillas(106);
      setCantidadSillas(2);
    } else if (packSeleccionado == "Mesa y 4 sillas") {
      setPrecioSillas(212);
      setCantidadSillas(4);
    }
    setCantidad(0);
  }, [packSeleccionado]);
  const precioFinal = () => {
    const precio = precioAcumulado + precioSillas + 64 * cantidad;
    return precio;
  };

  //Seteo de la seleccion final del pack
  useEffect(() => {
    setPackResto(packSeleccionado, cantidad, precioFinal());
  }, [packSeleccionado, cantidad, precioAcumulado, precioSillas]);

  
  useEffect(() => {
    // localStorage.clear()
    //Funciones para agregar lo elegido a la BBDD
    const handleCarrito = async () => {
      const result = await InsertarCarrito(pack);
      // Si la consulta da error
      if (!result.success) {
        toast.error(result.message);
      } else {
        if (result.usuario === "no iniciado") {
          const mesaJson = JSON.stringify(pack);
          // Guardamos la seleccion en el localStore
          let carrito = localStorage.getItem("carrito");
          //Comprueba si ya hay objetos almacenados
          if (carrito !== null) {
            let carritoObj = JSON.parse(carrito);
            if (!Array.isArray(carritoObj)) {
              carritoObj = [carritoObj]; // Si no es un array, lo convertimos en uno
            }

            let nuevoCarrito = [...carritoObj, pack];
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
  }, [guardarCarro]);

  return (
    <>
      <section className="lg:grid lg:grid-cols-2 w-full">
        <div className="flex justify-end relative">
          <Image
            src={`/productos/packs/${mesa}.png`}
            width={500}
            height={500}
            alt="foto mesa"
            className="h-full"
          />
          <div
            className={`absolute w-40 h-40 lg:h-60 lg:w-60 bottom-0 right-0 bg-black/50 p-4 flex justify-center ${
              packSeleccionado === "Mesa" ? "hidden" : "block"
            }`}
          >
            <Image
              src={`/productos/packs/${modelo}${
                formato === "Silla" ? "Silla" : "Tab"
              }.png`}
              width={300}
              height={300}
              alt="foto silla"
              className="h-full w-auto"
            />
            <div className="absolute text-5xl bottom-2 right-6">
              <span className="text-3xl">x</span>
              {cantidadSillas + cantidad}
            </div>
          </div>
        </div>
        <div className="bg-fondoSecundario p-8 flex flex-col gap-4 items-center w-full">
          <aside
            className={`text-3xl p-2 w-full flex justify-center cursor-pointer ${
              packSeleccionado === "Mesa" ? "bg-colorBase" : "bg-fondoTerciario"
            }`}
            onClick={() => setPackSeleccionado("Mesa")}
          >
            Mesa
          </aside>
          <aside
            className={`text-3xl p-2 w-full flex justify-center cursor-pointer ${
              packSeleccionado === "Mesa y 2 sillas"
                ? "bg-colorBase"
                : "bg-fondoTerciario"
            }`}
            onClick={() => setPackSeleccionado("Mesa y 2 sillas")}
          >
            Mesa y 2 sillas
          </aside>
          <aside
            className={`text-3xl p-2 w-full flex justify-center cursor-pointer ${
              packSeleccionado === "Mesa y 4 sillas"
                ? "bg-colorBase"
                : "bg-fondoTerciario"
            }`}
            onClick={() => setPackSeleccionado("Mesa y 4 sillas")}
          >
            Mesa y 4 sillas
          </aside>
          <section className="w-full flex gap-4 items-center mt-8 mb-8">
            <h1 className="text-xl lg:text-2xl">
              Añadir sillas extra <span className="text-xl">(64€/u)</span>
            </h1>
            <aside className="flex w-36 border-[1px] border-fondoTerciario justify-between">
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
            </aside>
          </section>
          <section className="w-full h-full flex items-end justify-between">
            {precioAcumulado ? (
              <div className="flex flex-col lg:flex-row justify-between w-full lg:gap-0 gap-4">
                <h1 className="text-3xl">Total: {precioFinal()}€</h1>
                <section className="flex gap-4 w-full lg:w-auto text-xl lg:text-base">
                  <div
                    className="bg-fondoTerciario border-[1px] border-colorBase p-2 lg:w-32 w-1/2 flex justify-center hover:bg-colorBase cursor-pointer"
                    onClick={() => {
                      setGuardarCarro(true);
                    }}
                  >
                    Añadir al carro
                  </div>
                  {/* Este te tiene q llevar a la pagina de compra */}
                  <div
                    className="bg-colorBase p-2 lg:w-32 w-1/2 flex justify-center cursor-pointer"
                    onClick={() => {
                      // setGuardarCarro(true);
                    }}
                  >
                    Comprar
                  </div>
                </section>
              </div>
            ) : (
              <h1 className="text-red-500">
                Para ver el precio, configura la mesa primero
              </h1>
            )}
          </section>
        </div>
      </section>
      <Toaster position="top-right" richColors />
    </>
  );
}
