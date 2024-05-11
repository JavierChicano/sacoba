"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SeccionInfoProducto({ producto }: { producto: any }) {
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(1);

  const precioTotal = () => {
    setTotal(cantidad * producto.precio);
  };
  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  const modelo = () => {
    const modelo = producto.modelo.toLowerCase();
    return modelo;
  };
  useEffect(() => {
    setCantidad(producto.cantidad);
    precioTotal();
  }, []);
  console.log(producto);
  return (
    <section className="flex mt-4 border-b border-colorBase pb-4 justify-between w-full items-center">
      <div className="w-1/2 flex gap-8">
        <div className="w-40">
          <Image
            className="w-full h-fll rounded-lg"
            src={`/productos/${producto.producto}s/${modelo()}.png`}
            alt="Imagen mesa"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h1 className="text-3xl">{producto.modelo}</h1>
          <h2 className="text-lg">{producto.acabado}</h2>
          <h2 className="text-lg">{producto.color}</h2>
        </div>
      </div>
      <div className="w-1/2 flex justify-around">
        <span className="w-32 flex justify-center">{Math.round(producto.precio/cantidad)}€</span>
        <div className="flex h-10 w-32 justify-center">
          <div
            className="bg-fondoTerciario p-2 flex justify-center hover:bg-colorBase cursor-pointer"
            onClick={() => {
              disminuirCantidad();
              precioTotal();
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
              precioTotal();
            }}
          >
            <IconPlus stroke={2} />
          </div>
        </div>
        <span className="w-32 flex justify-center">{total}€</span>
      </div>
    </section>
  );
}
