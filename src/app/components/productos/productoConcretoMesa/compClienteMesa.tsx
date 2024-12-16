"use client";
import { TipoColor, TipoMesa } from "../../../../../tipos/tipos";
import Image from "next/image";
import SeccionPrecio from "./seccionPrecio";
import RutaPC from "./rutaPC";
import SeccionPersonalizarMesa from "./seccionPersoMesa";
import { useMesaFinal } from "../../../../../states/statesProductoFinal";
import { useEffect, useState } from "react";

export default function CompClienteMesa({
  mesaSeleccionada,
  colores,
}: {
  mesaSeleccionada: TipoMesa[];
  colores: TipoColor[];
}) {
  const { mesa } = useMesaFinal();
  const [estadoPrecio, setEstadoPrecio] = useState(false);
  useEffect(() => {
    if (mesa.color !== "") {
      setEstadoPrecio(true);
    }
  }, [mesa]);
  return (
    <div>
      {mesaSeleccionada && (
        <div className="max-w-7xl grid grid-cols-2 w-full gap-6">
          <RutaPC />
          <h1 className="text-3xl lg:text-4xl border-b-2 border-colorBase col-span-2">
            {mesaSeleccionada[0].modelo}
          </h1>
          <section className="row-span-2 lg:col-span-1 col-span-2 h-fit">
            <Image
              className="w-full h-full max-h-[500px]"
              src={`/productos/mesas/${mesaSeleccionada[0].imagen}`}
              alt={`Imagen mesa ${mesaSeleccionada[0].modelo}`}
              width={500}
              height={500}
            />
            <aside className="text-xs mt-2">
              El grosor por defecto de los materiales{" "}
              <span className="italic">Silestone</span> y{" "}
              <span className="italic">Dekton</span> es de 12mm y 8mm
              respectivamente*.
            </aside>
            <aside className="text-xs">
              *Se utiliza un tablero de 16mm por debajo para dar robusted a la
              encimera.
            </aside>
            {mesaSeleccionada[0].extension === "extensible" && (
              <aside className="text-xs">
                El material del extensible es de laminado, pudiendo personalizar
                su color
              </aside>
            )}
          </section>
          <SeccionPersonalizarMesa
            mesaSeleccionada={mesaSeleccionada}
            colores={colores}
          />
          {/* Solo se muestra la seccion final del precio cuando haya uno establecido */}
          {estadoPrecio && (
            <SeccionPrecio mesaSeleccionada={mesaSeleccionada} />
          )}
        </div>
      )}
    </div>
  );
}
