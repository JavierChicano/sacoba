"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TipoMesa } from '../../../../../tipos/tipos';
import router from 'next/router';

export default function TarjetaDisplayInfo({ datos }: { datos: TipoMesa }) {
  const [hovered, setHovered] = useState(false);
  
  const handleClick = () => {
    console.log(`/ProductoConcretoMesa/${datos.modelo}`)
    router.push(`/ProductoConcretoMesa/${datos.modelo}`);
  };

  const obtenerArrayPrecio = (precioString: string): number[] => {
    return precioString.split(',').map((precio) => parseFloat(precio.trim()));
  };
  const precios = obtenerArrayPrecio(datos.precio);
  
  return (
    <div 
      className="relative w-full h-full lg:min-w-[300px] min-w-48"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div 
          className="absolute top-0 left-0 w-full h-full bg-black/80 flex flex-col justify-center items-center pointer-events-none z-10"
        >
          <p className="text-white text-3xl">{datos.modelo}</p>
          <h1 className="text-white text-2xl">Desde {precios[0]}€</h1>
        </div>
      )}

      <Link href={`/ProductoConcretoMesa/${datos.modelo}`}
      onClick={handleClick}
      >
        <Image
          className="w-full lg:h-60 h-40  cursor-pointer"
          src={`/productos/mesas/${datos.imagen}`}
          alt="Imagen mesa"
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
}
