"use client";
import { useState, useEffect } from "react";
import TarjetaDisplayInfoSilla from "./tarjetaDisplayInfoSilla";
import {
  IconAdjustmentsHorizontal,
  IconSquareRoundedChevronDown,
  IconSquareRoundedChevronUp,
} from "@tabler/icons-react";
import { TipoSilla } from "../../../../../tipos/tipos";
import { cn } from "@nextui-org/react";

export default function ObjSillasTotales({
  sillasTotales,
}: {
  sillasTotales: TipoSilla[];
}) {
  const [ocultarFiltro, setOcultarFiltro] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [sillasOrdenadas, setSillasOrdenadas] =
    useState<TipoSilla[]>(sillasTotales);

  const ordenarPorReciente = () => {
    const sortedSillas = [...sillasTotales].reverse();
    setSillasOrdenadas(sortedSillas);
  };

  const ordenarPorPrecioAlto = () => {
    const sortedSillas = [...sillasTotales].sort((a, b) => {
      const precioA = parseFloat(a.precio.split(",")[0]);
      const precioB = parseFloat(b.precio.split(",")[0]);
      return precioB - precioA;
    });
    setSillasOrdenadas(sortedSillas);
  };

  const ordenarPorPrecioBajo = () => {
    const sortedSillas = [...sillasTotales].sort((a, b) => {
      const precioA = parseFloat(a.precio.split(",")[0]);
      const precioB = parseFloat(b.precio.split(",")[0]);
      return precioA - precioB;
    });
    setSillasOrdenadas(sortedSillas);
  };

  useEffect(() => {
    if (!sillasOrdenadas.length) {
      setSillasOrdenadas(sillasTotales);
    }
  }, [sillasOrdenadas, sillasTotales]);

  return (
    <>
      <div className="w-full mb-4 flex justify-between">
        <h1 className="text-3xl pt-10 flex items-end">
          Sillas totales ({sillasTotales.length})
        </h1>
        <section className="bg-contraste mt-10 text-black flex items-center gap-8 p-4 rounded-lg relative">
          <span
            className="flex gap-2 cursor-pointer"
            onClick={() => setOcultarFiltro(!ocultarFiltro)}
          >
            {ocultarFiltro ? "Mostrar filtros" : "Ocultar filtros"}{" "}
            <IconAdjustmentsHorizontal stroke={2} />
          </span>
          <div className="w-[1px] h-full border border-colorBase"></div>
          <span
            className="flex cursor-pointer z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="z-20 flex gap-2">
              Ordenar por
              <IconSquareRoundedChevronDown
                stroke={2}
                className={cn(!isHovered ? "block" : "hidden")}
              />
              <IconSquareRoundedChevronUp
                stroke={2}
                className={cn(isHovered ? "block" : "hidden")}
              />
            </span>
            <ul
              className={cn(
                isHovered
                  ? "absolute pt-[52px] -mt-4 right-0 top-5 bg-contraste flex flex-col rounded-lg"
                  : "hidden"
              )}
            >
              <li
                className="hover:bg-colorBase px-4 py-2 cursor-pointer"
                onClick={ordenarPorReciente}
              >
                Más reciente
              </li>
              <li
                className="hover:bg-colorBase px-4 py-2 cursor-pointer"
                onClick={ordenarPorPrecioAlto}
              >
                Precio: alto - bajo
              </li>
              <li
                className="hover:bg-colorBase px-4 py-2 cursor-pointer rounded-b-lg"
                onClick={ordenarPorPrecioBajo}
              >
                Precio: bajo - alto
              </li>
            </ul>
          </span>
        </section>
      </div>

      <div
        className="max-w-7xl w-full self-start gap-4 grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {!ocultarFiltro && (
          <aside className="row-span-2 bg-fondoSecundario relative">
            {/* Aquí puedes añadir cualquier filtro para sillas */}
          </aside>
        )}
        {sillasOrdenadas.length > 0 ? (
          sillasOrdenadas.map((silla) => (
            <TarjetaDisplayInfoSilla key={silla.id} datos={silla} />
          ))
        ) : (
          <div>No hay sillas disponibles</div>
        )}
        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
      </div>
    </>
  );
}
