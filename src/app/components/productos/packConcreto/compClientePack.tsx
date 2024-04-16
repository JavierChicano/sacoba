"use client";
import { useState } from "react";
import { TipoColor, TipoPack } from "../../../../../tipos/tipos";
import RutaPackConcreto from "./rutaPackConcreto";
import SeccionMesaPack from "./seccionMesaPack";
import Image from "next/image";
import ImagenesSillas from "./imagenesSillas";
import ElegirPack from "./seccionElegirPack";

export default function CompClientePack({
  packSeleccionado,
  colores,
}: {
  packSeleccionado: TipoPack[];
  colores: TipoColor[];
}) {
  const [sillaSeleccionada, setSillaSeleccionada] = useState("");

  return (
    <div>
      <div className="max-w-7xl flex flex-col w-full gap-y-10">
        <RutaPackConcreto modelo={packSeleccionado[0].modelo} />
        <h1 className="text-4xl flex justify-center w-full">
          Primero, configure la mesa a su gusto
        </h1>
        <h1 className="text-4xl border-b-2 border-colorBase">
          {packSeleccionado[0].modelo}
        </h1>
        <section className="grid grid-cols-5">
          <div className="relative col-span-2 h-[400px]">
            <Image
              className="w-full h-full max-h-[500px]"
              src={`/productos/packs/${packSeleccionado[0].imagenMesa}`}
              alt="Imagen mesa"
              width={400}
              height={400}
            />
            <div className="absolute h-32 bottom-0 text-2xl bg-gradient-to-b from-transparent to-black/90 w-full pl-5 flex items-end pb-5">
              {packSeleccionado[0].descripcion}
            </div>
          </div>
          <SeccionMesaPack
            packSeleccionado={packSeleccionado}
            colores={colores}
          />
        </section>
        <h1 className="text-4xl flex justify-center w-full mt-10">
          Seleccione el modelo de silla deseado
        </h1>
        <section className="grid grid-cols-3 gap-10 w-full">
          <ImagenesSillas
            datos={{
              nombre: "Soria",
              selected: sillaSeleccionada === "Soria",
              onSelect: setSillaSeleccionada,
            }}
          />
          <ImagenesSillas
            datos={{
              nombre: "Onda",
              selected: sillaSeleccionada === "Onda",
              onSelect: setSillaSeleccionada,
            }}
          />
          <ImagenesSillas
            datos={{
              nombre: "Ker",
              selected: sillaSeleccionada === "Ker",
              onSelect: setSillaSeleccionada,
            }}
          />
        </section>
        {sillaSeleccionada !== "" && (
          <>
            <h1 className="text-4xl flex justify-center w-full mt-10">
              Aqui tiene los diferentes packs
            </h1>
            <ElegirPack
              mesa={packSeleccionado[0].modelo}
              precioMesa={0}
              silla={sillaSeleccionada}
            />
          </>
        )}
      </div>
    </div>
  );
}
