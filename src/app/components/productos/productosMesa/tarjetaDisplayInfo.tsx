"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMesaClickada } from '../../../../../states/states';

type MesaParams = {
  id: number;
  modelo: string;
  imagen: string;
  tipoBase: string;
  extension: string | null;
  tipoAmpliable?: string | null;
  auxiliar?: string | null;
  materialTapa?: string | null;
  colorTapa?: string | null;
  dimensiones?: string | null;
  altura?: string | null;
  materialPata?: string | null;
  colorPata?: string | null;
  precio: number;
};

export default function TarjetaDisplayInfo({ datos }: { datos: MesaParams }) {
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
      colorTapa: datos.colorTapa,
      dimensiones: datos.dimensiones,
      altura: datos.altura,
      materialPata: datos.materialPata,
      colorPata: datos.colorPata,
      precio: datos.precio,
    });
  };
  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div 
          className="absolute top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <p className="text-white">{datos.modelo}</p>
        </div>
      )}

      <Link href="/ProductoConcreto/"
      onClick={handleClick}
      >
        <Image
          className="w-full h-48 cursor-pointer"
          src={`/productos/mesas/${datos.imagen}`}
          alt="Imagen mesa"
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
}
