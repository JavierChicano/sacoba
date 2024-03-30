import { useState } from "react";
import { TipoSilla } from "../../../../../tipos/tipos";
import Link from 'next/link';
import Image from 'next/image';
import { useSillaClickada } from "../../../../../states/states";

export default function TarjetaDisplayInfoSilla({ datos }: { datos: TipoSilla }) {
    const { setSillaSeleccionada } = useSillaClickada();
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setSillaSeleccionada({
      id: datos.id,
      modelo: datos.modelo,
      imagen: datos.imagen,
      formato: datos.formato,
      materialAsiento: datos.materialAsiento,
      colorBastidor: datos.colorBastidor,
      tendencia: datos.tendencia,
      nuevo: datos.nuevo,
      precio: datos.precio,
    });
  };
  const obtenerArrayPrecio = (precioString: string): number[] => {
    return precioString.split(',').map((precio) => parseFloat(precio.trim()));
  };

  const precios = obtenerArrayPrecio(datos.precio);

    return(
<div 
      className="relative w-full h-full min-w-[300px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div 
          className="absolute top-0 left-0 w-full h-full bg-black/80 flex flex-col justify-center items-center pointer-events-none z-10"
        >
          <p className="text-white text-3xl">{datos.modelo}</p>
          <h1 className="text-2xl">Desde {precios[0]}€</h1>
        </div>
      )}

      <Link href="/ProductoConcretoSilla/" onClick={handleClick}>
        <Image
          className="w-full h-60 cursor-pointer"
          src={`/productos/sillas/${datos.imagen}`}
          alt="Imagen silla"
          width={500}
          height={500}
        />
      </Link>
    </div>
    )}
