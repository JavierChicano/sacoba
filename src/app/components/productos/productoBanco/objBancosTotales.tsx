"use client";
import { useState } from "react";
import {
  IconAdjustmentsHorizontal,
  IconSquareRoundedChevronDown,
  IconSquareRoundedChevronUp,
} from "@tabler/icons-react";
import { TipoBanco } from "../../../../../tipos/tipos";
import TarjetaDisplayBanco from "./TarjetaDisplayBanco";

export default function ObjBancosTotales({
  bancosTotales,
}: {
  bancosTotales: TipoBanco[];
}) {
  const [ocultarFiltro, setOcultarFiltro] = useState(false);

  return (
    <>
      <div className="w-full mb-4 flex justify-between">
        <h1 className="text-3xl pt-10 flex items-end">
          Bancos totales ({bancosTotales.length})
        </h1>
        <section className="bg-contraste mt-10 text-black flex items-center gap-8 p-4 rounded-lg">
          <span className="flex gap-2 cursor-pointer">
            Ordenar por <IconSquareRoundedChevronDown stroke={2} />
            {/* <IconSquareRoundedChevronDown stroke={2} /> */}
          </span>
        </section>
      </div>

      <div
        className="max-w-7xl w-full self-start gap-4 grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))" }}
      >
        {ocultarFiltro && (
          <aside className="row-span-2 bg-fondoSecundario"></aside>
        )}

        {bancosTotales.length > 0 ? (
          bancosTotales.map((banco) => (
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
