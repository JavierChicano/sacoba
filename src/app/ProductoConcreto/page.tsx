"use client";
import { useEffect, useState } from "react";
import { useMesaClickada } from "../../../states/states";
import Image from "next/image";
import SeccionEncimera from "../components/productos/productoConcreto/seccionEncimera";
import SeccionEstructura from "../components/productos/productoConcreto/seccionEstructura";
import SeccionPrecio from "../components/productos/productoConcreto/seccionPrecio";

export default function ProductoConcreto() {
  const { mesaSeleccionada } = useMesaClickada();
  const [precioFinal, setPrecioFinal] = useState(0);

  useEffect(() => {
    if (mesaSeleccionada !== null) {
      setPrecioFinal(mesaSeleccionada.precio);
    }
  }, [mesaSeleccionada]);

  return (
    <main className="flex flex-col items-center">
      {/* {mesaSeleccionada && (  */}
      <div className=" max-w-7xl grid grid-cols-2 w-full gap-14">
        <Image
          className="w-full h-auto cursor-pointer"
          src={`/productos/mesas/lomma.png`}
          alt="Imagen mesa"
          width={500}
          height={500}
        />
        <section className="flex flex-col gap-8">
          <h1 className="text-4xl border-b-2 border-colorBase">LOMMA</h1>
          <SeccionEncimera />
          <SeccionEstructura />
          <SeccionPrecio precio={precioFinal}/>
        </section>
      </div>
      {/* )} */}
    </main>
  );
}
