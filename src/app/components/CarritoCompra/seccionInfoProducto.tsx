"use client"
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

export default function SeccionInfoProducto() {
  const [cantidad, setCantidad] = useState(1);
  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <section className="flex mt-4 border-b border-colorBase pb-4 justify-between w-full items-center">
      <div className="w-1/2 flex gap-8">
        <div className="w-40">
          <Image
            className="w-full h-fll rounded-lg"
            src={`/productos/mesas/m12.png`}
            alt="Imagen mesa"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h1 className="text-3xl">Modelo</h1>
          <h2 className="text-lg">Producto</h2>
          <h2 className="text-lg">Color</h2>
        </div>
      </div>
      <div className="w-1/2 flex justify-around">
        <span className="w-32 flex justify-center">X€</span>
        <div className="flex h-10 w-32 justify-center">
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
        </div>
        <span className="w-32 flex justify-center">XX€</span>
      </div>
    </section>
  );
}
