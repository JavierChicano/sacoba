"use client";
import { useState, useEffect, ChangeEvent } from "react";
import TarjetaDisplayInfo from "./tarjetaDisplayInfo";
import {
  IconAdjustmentsHorizontal,
  IconSquareRoundedChevronDown,
  IconSquareRoundedChevronUp,
} from "@tabler/icons-react";
import { TipoMesa } from "../../../../../tipos/tipos";
import { Select, SelectItem, Slider, SliderValue, cn } from "@nextui-org/react";
import React from "react";

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

  useEffect(() => {
    if (!mesasOrdenadas.length) {
      setMesasOrdenadas(mesasTotales);
    }
  }, []);
  //Filtro de ordenacion
  const ordenarPorReciente = () => {
    const sortedMesas = [...mesasOrdenadas].reverse();
    setMesasOrdenadas(sortedMesas);
  };
  const ordenarPorPrecioAlto = () => {
    const sortedMesas = [...mesasOrdenadas].sort((a, b) => {
      const precioA = parseFloat(a.precio.split(",")[0]);
      const precioB = parseFloat(b.precio.split(",")[0]);
      return precioB - precioA;
    });
    setMesasOrdenadas(sortedMesas);
  };

  const ordenarPorPrecioBajo = () => {
    const sortedMesas = [...mesasOrdenadas].sort((a, b) => {
      const precioA = parseFloat(a.precio.split(",")[0]);
      const precioB = parseFloat(b.precio.split(",")[0]);
      return precioA - precioB;
    });
    setMesasOrdenadas(sortedMesas);
  };

  //Para poder filtrar las mesas por tipo de base
  const [tiposBases, setTiposBases] = useState<string[]>([]);
  const [tiposBaseSeleccionados, setTiposBaseSeleccionados] = useState<string[]>([]);

   //Para poder filtrar las mesas por extension
   const [tiposExtension, setTiposExtension] = useState<string[]>([]);
   const [tiposExtensionSeleccionados, setTiposExtensionSeleccionados] = useState<string[]>([]);
 
  const handleSelectionChange = (indice: string) => {
    if (indice) {
      const indices = indice.split(",").map(Number);
      const tiposSeleccionados = indices.map((index) => tiposBases[index]);
      setTiposBaseSeleccionados(tiposSeleccionados);
    } else {
      setTiposBaseSeleccionados([]);
    }
  };

  const handleSelectionChange2 = (indice: string) => {
    if (indice) {
      const indices = indice.split(",").map(Number);
      const tiposSeleccionados = indices.map((index) => tiposExtension[index]);
      setTiposExtensionSeleccionados(tiposSeleccionados);
    } else {
      setTiposExtensionSeleccionados([]);
    }
  };
  
  // Filtrar las mesas en función de los valores del slider y los tipos de base seleccionados
  useEffect(() => {
    const mesasFiltradasPorPrecio = mesasTotales.filter((mesa) => {
      const precio = parseFloat(mesa.precio.split(",")[0]);
      if (precioMaximo === precioMinimo) {
        return precio >= precioMinimo - 50 && precio <= precioMaximo + 50;
      } else {
        return precio >= precioMinimo && precio <= precioMaximo;
      }
    });
    
    // Filtrar mesas por tipo de base
    const mesasFiltradasPorTiposBase = tiposBaseSeleccionados.length > 0
    ? mesasFiltradasPorPrecio.filter((mesa) => tiposBaseSeleccionados.includes(mesa.tipoBase))
    : mesasFiltradasPorPrecio;

    // Filtrar mesas por extensión
    const mesasFiltradasPorExtension = tiposExtensionSeleccionados.length > 0
    ? mesasFiltradasPorTiposBase.filter((mesa) => tiposExtensionSeleccionados.includes(mesa.extension))
    : mesasFiltradasPorTiposBase;

    // Establecer las mesas ordenadas
    setMesasOrdenadas(mesasFiltradasPorExtension);


    // Extraer tipos de base únicos
    const tiposBaseUnicos = Array.from(
      new Set(mesasFiltradasPorPrecio.map((mesa) => mesa.tipoBase))
    );
    setTiposBases(tiposBaseUnicos);

    // Extraer tipos de extension únicos
    const tiposExtensionUnicos = Array.from(
      new Set(mesasFiltradasPorPrecio.map((mesa) => mesa.extension))
    );
    setTiposExtension(tiposExtensionUnicos);
    
  }, [precioMinimo, precioMaximo, tiposBaseSeleccionados, mesasTotales, tiposExtensionSeleccionados]);

  return (
    <>
      <div className="w-full mb-4 flex flex-col lg:flex-row justify-between">
        <h1 className="text-xl lg:text-3xl pt-10 flex items-end">
          Mesas totales ({mesasOrdenadas.length})
        </h1>
        <section className="bg-white mt-4 lg:mt-10 text-black flex items-center justify-center gap-2 p-2 lg:gap-8 lg:p-4 rounded-lg relative text-xl lg:text-lg">
          <span
            className="flex gap-2 cursor-pointer"
            onClick={() => setOcultarFiltro(!ocultarFiltro)}
          >
            {ocultarFiltro ? "Mostrar filtros" : "Ocultar filtros"}{" "}
            <IconAdjustmentsHorizontal stroke={2} />
          </span>
          <div className="w-[1px] h-10 lg:h-full border border-colorBase"></div>
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
                  ? "absolute pt-[52px] -mt-4 right-0 top-5 bg-white flex flex-col rounded-lg"
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
        className="max-w-7xl w-full self-start gap-4 grid lg:grid-cols-auto-fit-minmax grid-cols-2"
      >
        {!ocultarFiltro && (
          <aside className="row-span-1 bg-fondoSecundario relative p-4 lg:col-span-1 col-span-2">
            <Slider
              label="Filtrar precios"
              step={100}
              minValue={200}
              maxValue={1000}
              showSteps
              defaultValue={[precioMinimo, precioMaximo]}
              formatOptions={{ style: "currency", currency: "EUR" }}
              className="max-w-md"
              onChange={(value: SliderValue) => {
                setPrecioMinimo((value as number[])[0]);
                setPrecioMaximo((value as number[])[1]);
              }}
            />
            <Select
              label="Por tipo de estructura"
              selectionMode="multiple"
              className="lg:max-w-xs mt-6"
              radius="none"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                const value = event.target.value;
                handleSelectionChange(value);
              }}
            >
              {tiposBases.map((tipoBase, index) => (
                <SelectItem key={index} value={tipoBase}>
                  {tipoBase}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Por extensión"
              selectionMode="multiple"
              className="lg:max-w-xs mt-6"
              radius="none"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                const value = event.target.value;
                handleSelectionChange2(value);
              }}
            >
              {tiposExtension.map((tipoBase, index) => (
                <SelectItem key={index} value={tipoBase}>
                  {tipoBase}
                </SelectItem>
              ))}
            </Select>
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
