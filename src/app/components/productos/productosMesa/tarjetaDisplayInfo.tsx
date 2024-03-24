"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMesaClickada } from '../../../../../states/states';
import { TipoMesa } from '../../../../../tipos/tipos';

export default function TarjetaDisplayInfo({ datos }: { datos: TipoMesa }) {
  const { setMesaSeleccionada } = useMesaClickada();
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    setMesaSeleccionada({
      id: datos.id,
      modelo: datos.modelo,
      imagen: datos.imagen,
      tipoBase: datos.tipoBase,
      extension: datos.extension,
      tipoAmpliable: datos.tipoAmpliable,
      auxiliar: datos.auxiliar,
      materialTapa: datos.materialTapa,
      dimensiones: datos.dimensiones,
      altura: datos.altura,
      materialPata: datos.materialPata,
      colorPata: datos.colorPata,
      precio: datos.precio,
    });
  };
  return (
    <div 
      className="relative w-full h-full min-w-[300px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div 
          className="absolute top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center pointer-events-none z-10"
        >
          <p className="text-white text-3xl">{datos.modelo}</p>
        </div>
      )}

      <Link href="/ProductoConcretoMesa/"
      onClick={handleClick}
      >
        <Image
          className="w-full h-60 cursor-pointer"
          src={`/productos/mesas/${datos.imagen}`}
          alt="Imagen mesa"
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
}
