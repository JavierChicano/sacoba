"use client";
import { useState } from "react";
import { TipoPack } from "../../../../tipos/tipos";
import Image from "next/image";
import { IconArrowRightBar } from "@tabler/icons-react";
import Link from "next/link";
import router from "next/router";
import { useTheme } from "next-themes";

export default function TarjDisplayPacksMovil({ datos }: { datos: TipoPack }) {
  const { theme } = useTheme();

  const handleClick = () => {
    router.push(`/PackConcreto/${datos.modelo}`);
  };
  return (
    <Link
      className="w-full h-full relative"
      href={`/PackConcreto/${datos.modelo}`}
      onClick={handleClick}
    >
      <Image
        className="w-full h-full cursor-pointer"
        src={`/productos/packs/${datos.imagenMesa}`}
        alt="Imagen mesa"
        width={500}
        height={500}
      />
      <section className="p-5 absolute bottom-0 w-full overflow-hidden z-10 bg-gradient-to-b from-transparent to-[#f3f3f34d] backdrop-blur-sm text-black">
        <div className="h-full flex flex-col justify-between">
          <aside className="flex items-center justify-between text-2xl border-b border-colorBase">
            <h1>
              {datos.modelo}
            </h1>
            <span className="text-xl text-colorBase font-bold underline">Ir a ver</span>
          </aside>
          <h2>{datos.descripcion}</h2>
        </div>
      </section>
    </Link>
  );
}
