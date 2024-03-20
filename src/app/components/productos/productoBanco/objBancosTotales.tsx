"use client";
import { useEffect, useState } from "react";
import {
  IconAdjustmentsHorizontal,
  IconSquareRoundedChevronDown,
  IconSquareRoundedChevronUp,
} from "@tabler/icons-react";
import { TipoBanco } from "../../../../../tipos/tipos";
import TarjetaDisplayBanco from "./TarjetaDisplayBanco";
import { cn } from "@nextui-org/react";

export default function ObjBancosTotales({
  bancosTotales,
}: {
  bancosTotales: TipoBanco[];
}) {
  const [ocultarFiltro, setOcultarFiltro] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [bancosOrdenados, setBancosOrdenados] = useState<TipoBanco[]>(bancosTotales);

  const ordenarPorReciente = () => {
    const sortedBancos = [...bancosTotales].reverse();
    setBancosOrdenados(sortedBancos);
  };

  const ordenarPorPrecioAlto = () => {
    const sortedBancos = [...bancosTotales].sort((a, b) => {
      const precioA = parseFloat(a.precio.split(",")[0]);
      const precioB = parseFloat(b.precio.split(",")[0]);
      return precioB - precioA;
    });
    setBancosOrdenados(sortedBancos);
    console.log(sortedBancos)
  };

  const ordenarPorPrecioBajo = () => {
    const sortedBancos = [...bancosTotales].sort((a, b) => {
      const precioA = parseFloat(a.precio.split(",")[0]);
      const precioB = parseFloat(b.precio.split(",")[0]);
      return precioA - precioB;
    });
    setBancosOrdenados(sortedBancos);
    console.log(sortedBancos)

  };
  useEffect(() => {
    if (!bancosOrdenados.length) {
      setBancosOrdenados(bancosTotales);
    }
  }, [bancosOrdenados, bancosTotales]);
  return (
    <>
      <div className="w-full mb-4 flex justify-between">
        <h1 className="text-3xl pt-10 flex items-end">
          Bancos totales ({bancosTotales.length})
        </h1>
        <section
          className="bg-contraste mt-10 text-black flex flex-col items-center gap-8 p-4 rounded-lg "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="flex gap-2 cursor-pointer z-20">
            Ordenar por <IconSquareRoundedChevronDown stroke={2} className={cn(!isHovered ? "block" : "hidden")}/>
            <IconSquareRoundedChevronUp stroke={2} className={cn(isHovered ? "block" : "hidden")}/> 
          </span>
          <ul className={cn(isHovered ? "absolute pt-16 -mt-4  bg-contraste z-10 flex flex-col rounded-lg" : "hidden")}>
          <li className="hover:bg-colorBase px-4 py-2 cursor-pointer " onClick={ordenarPorReciente}>Más reciente</li>
            <li className="hover:bg-colorBase px-4 py-2 cursor-pointer " onClick={ordenarPorPrecioAlto}>Precio: alto - bajo</li>
            <li className="hover:bg-colorBase px-4 py-2 cursor-pointer rounded-b-lg" onClick={ordenarPorPrecioBajo}>Precio: bajo - alto</li>
          </ul>
        </section>
      </div>

      <div
        className="max-w-7xl w-full self-start gap-4 grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))" }}
      >
        {ocultarFiltro && (
          <aside className="row-span-2 bg-fondoSecundario"></aside>
        )}

        {bancosOrdenados.length > 0 ? (
          bancosOrdenados.map((banco) => (
            <TarjetaDisplayBanco
              key={banco.id}
              datos={{
                id: banco.id,
                modelo: banco.modelo,
                imagen: banco.imagen,
                modulo: banco.modulo,
                materialBastidor: banco.materialBastidor,
                respaldo: banco.respaldo,
                precioRespaldo: banco.precioRespaldo,
                zocalo: banco.zocalo,
                precio: banco.precio,
              }}
            />
          ))
        ) : (
          <div>No hay mesas disponibles</div>
        )}
        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
      </div>
    </>
  );
}
