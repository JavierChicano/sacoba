import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSillaFinal } from "../../../../../states/statesProductoFinal";
import { Toaster, toast } from "sonner";
import { InsertarCarrito } from "../insertarCarrito";
import Euro from "../../euro";
import BotonCompraSilla from "./botonCompraSilla";
import { InsertarCarritoLocal } from "../insertarCarritoLocal";

export default function SeccionPrecioSilla({ precio }: { precio: number }) {
  const { silla, setPrecioSillaFinal, setCantidadSillas } = useSillaFinal();
  const [cantidad, setCantidad] = useState(1);
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
    const precioCalculado = Math.round(precio * cantidad);
    return precioCalculado;
  };

  useEffect(() => {
    // localStorage.clear()
    //Funciones para agregar lo elegido a la BBDD
    const handleCarrito = async () => {
      const result = await InsertarCarrito(silla);
      // Si la consulta da error
      if (!result.success) {
        toast.error(result.message);
      } else {
        const resultLocal = await InsertarCarritoLocal(silla);
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
    setPrecioSillaFinal(precioFinal());
    setCantidadSillas(cantidad);
  }, [cantidad, precio]);

  return (
    <>
      <section className="bg-fondoSecundario flex flex-col p-8 col-span-2 lg:col-span-1">
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
          <section className="flex lg:flex-col gap-4 w-full lg:w-auto justify-center lg:mt-0 mt-6">
            <div
              className="bg-fondoTerciario border-[1px] border-colorBase p-2 w-32 flex justify-center hover:bg-colorBase cursor-pointer flex-grow"
              onClick={() => {
                setPrecioSillaFinal(precio);
                setCantidadSillas(cantidad);
                setGuardarCarro(true);
              }}
            >
              Añadir al carro
            </div>
            {/* Este te tiene q llevar a la pagina de compra */}
            <BotonCompraSilla silla={silla}/>
          </section>
        </div>
      </section>
      <Toaster position="top-right" richColors />
    </>
  );
}
