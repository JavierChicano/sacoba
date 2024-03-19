"use client"
import { useState } from "react";
import { useBancoClickada } from "../../../../../states/states";
import { TipoBanco } from "../../../../../tipos/tipos";
import Link from 'next/link';
import Image from 'next/image';

export default function TarjetaDisplayBanco({ datos }: { datos: TipoBanco }) {
  const { setBancoSeleccionado } = useBancoClickada();
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    setBancoSeleccionado({
      id: datos.id,
      modelo: datos.modelo,
      imagen: datos.imagen,
      modulo: datos.modulo,
      materialBastidor: datos.materialBastidor,
      respaldo: datos.respaldo,
      precioRespaldo: datos.precioRespaldo,
      zocalo: datos.zocalo,
      precio: datos.precio,
    });
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

      <Link href="/ProductoConcretoMesa/" onClick={handleClick}>
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
