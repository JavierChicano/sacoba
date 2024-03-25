"use client";
import { useState } from "react";
import TarjetaDisplayInfo from "./tarjetaDisplayInfo";
import {
  IconAdjustmentsHorizontal,
  IconSquareRoundedChevronDown,
  IconSquareRoundedChevronUp,
} from "@tabler/icons-react";
import { TipoMesa } from "../../../../../tipos/tipos";

export default function ObjMesasTotales({
  mesasTotales,
}: {
  mesasTotales: TipoMesa[];
}) {
  const [ocultarFiltro, setOcultarFiltro] = useState(false);

  return (
    <>
      <div className="w-full mb-4 flex justify-between">
        <h1 className="text-3xl pt-10 flex items-end">
          Mesas totales ({mesasTotales.length})
        </h1>
        <section className="bg-contraste mt-10 text-black flex items-center gap-8 p-4 rounded-lg">
          <span className="flex gap-2 cursor-pointer">
            Mostrar filtros{" "}
            <IconAdjustmentsHorizontal
              stroke={2}
              onClick={() => setOcultarFiltro}
            />
          </span>
          <div className="w-[1px] h-full border border-colorBase"></div>

          <span className="flex gap-2 cursor-pointer">
            Ordenar por <IconSquareRoundedChevronDown stroke={2} />
            {/* <IconSquareRoundedChevronDown stroke={2} /> */}
          </span>
        </section>
      </div>

      <div
        className="max-w-7xl w-full self-start gap-4 grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {ocultarFiltro && (
          <aside className="row-span-2 bg-fondoSecundario"></aside>
        )}

        {mesasTotales.length > 0 ? (
          mesasTotales.map((mesa) => (
            <TarjetaDisplayInfo
              key={mesa.id}
              datos={{
                id: mesa.id,
                modelo: mesa.modelo,
                imagen: mesa.imagen,
                tipoBase: mesa.tipoBase,
                extension: mesa.extension,
                tipoAmpliable: mesa.tipoAmpliable,
                auxiliar: mesa.auxiliar,
                materialTapa: mesa.materialTapa,
                dimensiones: mesa.dimensiones,
                altura: mesa.altura,
                materialPata: mesa.materialPata,
                colorPata: mesa.colorPata,
                precio: mesa.precio,
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
