"use client";
import { useEffect, useState } from "react";
import { useMesaClickada, usePrecioAcumulado } from "../../../states/states";
import Image from "next/image";
import SeccionEncimera from "../components/productos/productoConcretoMesa/seccionEncimera";
import SeccionEstructura from "../components/productos/productoConcretoMesa/seccionEstructura";
import SeccionPrecio from "../components/productos/productoConcretoMesa/seccionPrecio";
import RutaPC from "../components/productos/productoConcretoMesa/rutaPC";

export default function ProductoConcreto() {
  const { mesaSeleccionada } = useMesaClickada();
  const { setPrecioAcumulado } = usePrecioAcumulado();

  useEffect(() => {
    if (mesaSeleccionada !== null) {
      setPrecioAcumulado(mesaSeleccionada.precio);
    }
  }, []);
  return (
    <main className="flex flex-col items-center">
      {mesaSeleccionada && (
        <div className=" max-w-7xl grid grid-cols-2 w-full gap-6">
          <RutaPC />
          <h1 className="text-4xl border-b-2 border-colorBase col-span-2 ">
            {mesaSeleccionada.modelo}
          </h1>

          <section className="row-span-3 ">
            <Image
              className="w-full h-full max-h-[500px]"
              src={`/productos/mesas/${mesaSeleccionada.imagen}`}
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
    </main>
  );
}
