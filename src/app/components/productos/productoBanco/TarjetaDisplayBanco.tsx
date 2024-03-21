"use client"
import { useState } from "react";
import { useBancoClickado } from "../../../../../states/states";
import { TipoBanco } from "../../../../../tipos/tipos";
import Link from 'next/link';
import Image from 'next/image';

export default function TarjetaDisplayBanco({ datos, bancosTotales }: { datos: TipoBanco, bancosTotales:TipoBanco[]}) {
  const { setBancoSeleccionado } = useBancoClickado();
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    const bancoResultados = bancosTotales.filter(banco => banco.modelo === datos.modelo);
    setBancoSeleccionado(bancoResultados);
    console.log(bancoResultados)
  };
  return (
    <div
      className="relative w-full h-full min-w-[400px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center pointer-events-none z-10">
          <p className="text-white text-3xl">{datos.modelo}</p>
        </div>
      )}

      <Link href="/ProductoConcretoBanco/" onClick={handleClick}>
        <Image
          className="w-full h-60 cursor-pointer"
          src={`/productos/bancos/${datos.imagen}`}
          alt="Imagen mesa"
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
}
