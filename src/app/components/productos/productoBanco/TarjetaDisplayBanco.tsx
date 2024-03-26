"use client";
import { useEffect, useState } from "react";
import { useBancoClickado } from "../../../../../states/states";
import { TipoBanco } from "../../../../../tipos/tipos";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TarjetaDisplayBanco({
  datos,
  bancosTotales,
}: {
  datos: TipoBanco;
  bancosTotales: TipoBanco[];
}) {
  const { setBancoSeleccionado } = useBancoClickado();
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    const bancoResultados = bancosTotales.filter(
      (banco) => banco.modelo === datos.modelo
    );
    setBancoSeleccionado(bancoResultados);
    console.log(bancoResultados);
    router.push(`/ProductoConcretoBanco/${datos.modelo}`);
  };
  const obtenerArrayPrecio = (precioString: string): number[] => {
    return precioString.split(',').map((precio) => parseFloat(precio.trim()));
  };
  const precios = obtenerArrayPrecio(datos.precio);
  
  return (
    <div
      className="relative w-full h-full min-w-[400px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex flex-col justify-center items-center pointer-events-none z-10">
          <p className="text-white text-3xl">{datos.modelo}</p>
          <h1 className="text-2xl">Desde {precios[0]}€</h1>
        </div>
      )}

      <Link
        href={`/ProductoConcretoBanco/${datos.modelo}`}
        onClick={handleClick}
      >
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
