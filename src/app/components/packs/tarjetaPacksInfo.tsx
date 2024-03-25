import { useState } from "react";
import { TipoPack } from "../../../../tipos/tipos";
import Image from "next/image";
import { Meteors } from "../main/meteoros";

export default function TarjetaDisplayPacks({
  datos,
  posicion,
}: {
  datos: TipoPack;
  posicion: number;
}) {
  return (
    <>
      {/* Esto simplemente es un relleno de codigo, para situar correctamente los section */}
      {posicion % 2 !== 0 && (
        <>
          <div></div>
          <div></div>
        </>
      )}
      <section className="col-span-2 w-full bg-fondoSecundario h-96 grid grid-cols-2">
        <div
          className={`${posicion % 2 !== 0 ? "" : "order-2"} overflow-hidden`}
        >
          <Image
            className="w-full h-full cursor-pointer"
            src={`/productos/packs/${datos.imagenMesa}`}
            alt="Imagen mesa"
            width={500}
            height={500}
          />
        </div>
        <section className="p-5 relative overflow-hidden">
          <Meteors />
          <div className="z-10">
          <h1 className="text-4xl">{datos.modelo}</h1>
          <h2>{datos.descripcion}</h2>
          </div>
          
        </section>
      </section>
    </>
  );
}
