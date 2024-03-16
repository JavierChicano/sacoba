"use client";
import { useMesaClickada } from "../../../states/states";
import Image from "next/image";

export default function ProductoConcreto() {
  const { mesaSeleccionada } = useMesaClickada();

  return (
    <main className="flex flex-col items-center">
      {/* {mesaSeleccionada && ( */}
      <div className=" max-w-7xl grid grid-cols-2 w-full">
        <Image
          className="w-full h-full cursor-pointer"
          src={`/productos/mesas/lomma.png`}
          alt="Imagen mesa"
          width={500}
          height={500}
        />
        <section>
          <h1 className="text-4xl">LOMMMA</h1>
          <section>
            <h2>Tamaños encimera</h2>
            <div className="flex gap-4">
              <span>100x30</span>
              <span>120x50</span>
              <span>150x80</span>
            </div>
          </section>
          <section>
          <h2>materialTapa</h2>
            <div>
              <span>laminado</span>

            </div>
          </section>
          <aside>
            <h3>€90,00 EUR</h3>
            <span>Iva incluido</span>
          </aside>
        </section>
      </div>
      {/* )} */}
    </main>
  );
}
