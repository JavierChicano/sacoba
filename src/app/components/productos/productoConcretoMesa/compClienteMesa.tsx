"use client";
import { TipoMesa } from "../../../../../tipos/tipos";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePrecioAcumulado } from "../../../../../states/states";
import SeccionEncimera from "./seccionEncimera";
import SeccionEstructura from "./seccionEstructura";
import SeccionPrecio from "./seccionPrecio";
import RutaPC from "./rutaPC";


export default function CompClienteMesa({mesaSeleccionada}:{mesaSeleccionada: TipoMesa[]}){
  const { setPrecioAcumulado } = usePrecioAcumulado();

  useEffect(() => {
    if (mesaSeleccionada !== null) {
      const preciosArray = mesaSeleccionada[0].precio.split(",").map(Number);
      console.log(preciosArray);
      setPrecioAcumulado(preciosArray[0]);
    }
  }, []);
  return (
    <div>
      {mesaSeleccionada && (
        <div className="max-w-7xl grid grid-cols-2 w-full gap-6">
          <RutaPC />
          <h1 className="text-4xl border-b-2 border-colorBase col-span-2">
            {mesaSeleccionada[0].modelo}
          </h1>
          <section className="row-span-3">
            <Image
              className="w-full h-full max-h-[500px]"
              src={`/productos/mesas/${mesaSeleccionada[0].imagen}`}
              alt="Imagen mesa"
              width={500}
              height={500}
            />
          </section>
          <SeccionEncimera />
          <SeccionEstructura />
          <SeccionPrecio />
        </div>
      )}
    </div>
  );
}