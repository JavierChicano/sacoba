"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CuadroEleccion() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  return (
    <section className="text-5xl flex gap-12 my-20">
      <div
        className="relative w-96 h-96"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center pointer-events-none z-10">
            <p className="text-white">Estructura</p>
          </div>
        )}

        <Link href="/ProductoConcretoMesa/">
          <Image
            className="w-full h-full cursor-pointer"
            src="/estructura.png"
            alt="Imagen mesa"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="w-[1px] border border-colorBase"></div>
      <div
        className="relative w-96 h-96"
        onMouseEnter={() => setHovered2(true)}
        onMouseLeave={() => setHovered2(false)}
      >
        <aside className="absolute z-50 bg-red-600 text-lg p-1 rounded-lg -right-8 -top-5">
          Recomendado
        </aside>
        {hovered2 && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center pointer-events-none z-10">
            <p className="text-white">Encimera</p>
          </div>
        )}

        <Link href="/ProductoConcretoMesa/">
          <Image
            className="w-full h-full cursor-pointer"
            src="/encimera.png"
            alt="Imagen mesa"
            width={500}
            height={500}
          />
        </Link>
      </div>
    </section>
  );
}
