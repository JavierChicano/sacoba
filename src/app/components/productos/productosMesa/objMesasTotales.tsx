"use client";
import { useState, useEffect } from "react";
import TarjetaDisplayInfo from "./tarjetaDisplayInfo";
import {
  IconAdjustmentsHorizontal,
  IconSquareRoundedChevronDown,
  IconSquareRoundedChevronUp,
} from "@tabler/icons-react";
import { TipoMesa } from "../../../../../tipos/tipos";
import { Slider, SliderValue, cn } from "@nextui-org/react";

export default function ObjMesasTotales({
  mesasTotales,
}: {
  mesasTotales: TipoMesa[];
}) {
  const [ocultarFiltro, setOcultarFiltro] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mesasOrdenadas, setMesasOrdenadas] =
    useState<TipoMesa[]>(mesasTotales);
  const [precioMinimo, setPrecioMinimo] = useState(200);
  const [precioMaximo, setPrecioMaximo] = useState(1000);
  const ordenarPorReciente = () => {
    const sortedMesas = [...mesasTotales].reverse();
    setMesasOrdenadas(sortedMesas);
  };

  const ordenarPorPrecioAlto = () => {
    const sortedMesas = [...mesasTotales].sort((a, b) => {
      const precioA = parseFloat(a.precio.split(",")[0]);
      const precioB = parseFloat(b.precio.split(",")[0]);
      return precioB - precioA;
    });
    setMesasOrdenadas(sortedMesas);
  };

  const ordenarPorPrecioBajo = () => {
    const sortedMesas = [...mesasTotales].sort((a, b) => {
      const precioA = parseFloat(a.precio.split(",")[0]);
      const precioB = parseFloat(b.precio.split(",")[0]);
      return precioA - precioB;
    });
    setMesasOrdenadas(sortedMesas);
  };

  useEffect(() => {
    if (!mesasOrdenadas.length) {
      setMesasOrdenadas(mesasTotales);
    }
  }, []);

  useEffect(() => {
    // Filtrar las mesas en función de los valores del slider
    const mesasFiltradas = mesasTotales.filter((mesa) => {
      const precio = parseFloat(mesa.precio.split(",")[0]);
      if (precioMaximo === precioMinimo) {
        return precio >= precioMinimo - 50 && precio <= precioMaximo + 50;
      } else {
        return precio >= precioMinimo && precio <= precioMaximo;
      }
    });
    setMesasOrdenadas(mesasFiltradas);
  }, [precioMinimo, precioMaximo, mesasTotales]);

  return (
    <>
      <div className="w-full mb-4 flex justify-between">
        <h1 className="text-3xl pt-10 flex items-end">
          Mesas totales ({mesasOrdenadas.length})
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
          <aside className="row-span-1 bg-fondoSecundario relative p-4">
            <Slider
              label="Filtrar precios"
              step={100}
              minValue={200}
              maxValue={1000}
              showSteps
              defaultValue={[100, 500]}
              formatOptions={{ style: "currency", currency: "EUR" }}
              className="max-w-md"
              onChange={(value: SliderValue) => {
                setPrecioMinimo((value as number[])[0]);
                setPrecioMaximo((value as number[])[1]);
              }}
            />
          </aside>
        )}
        {mesasOrdenadas.length > 0 ? (
          mesasOrdenadas.map((mesa) => (
            <TarjetaDisplayInfo key={mesa.id} datos={mesa} />
          ))
        ) : (
          <div>No hay mesas disponibles</div>
        )}
        <div></div>
        <div></div>
      </div>
    </>
  );
}
