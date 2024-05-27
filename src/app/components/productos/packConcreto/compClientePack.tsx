"use client";
import { useEffect, useState } from "react";
import { TipoColor, TipoPack } from "../../../../../tipos/tipos";
import RutaPackConcreto from "./rutaPackConcreto";
import SeccionMesaPack from "./seccionMesaPack";
import Image from "next/image";
import ImagenesSillas from "./imagenesSillas";
import ElegirPack from "./seccionElegirPack";
import { usePackFinal } from "../../../../../states/statesProductoFinal";

export default function CompClientePack({
  packSeleccionado,
  colores,
  coloresSilla
}: {
  packSeleccionado: TipoPack[];
  colores: TipoColor[];
  coloresSilla: TipoColor[];
}) {

  //Estados locales para guardar momentaneamente la información
  const [modeloSeleccionada, setModeloSeleccionada] = useState("");
  const [formatoSeleccionado, setFormatoSeleccionado] = useState("Silla");

  
  return (
    <div>
      <div className="max-w-7xl flex flex-col w-full gap-y-10 p-4 lg:p-0">
        <RutaPackConcreto modelo={packSeleccionado[0].modelo} />
        <h1 className="text-xl lg:text-4xl flex justify-center w-full">
          Primero, configura la mesa a tu gusto
        </h1>
        <h1 className="text-3xl lg:text-4xl border-b-2 border-colorBase">
          {packSeleccionado[0].modelo}
        </h1>
        <section className="lg:grid lg:grid-cols-5 flex flex-col ">
          <div className="relative col-span-2">
            <Image
              className="w-full h-full max-h-[500px]"
              src={`/productos/packs/${packSeleccionado[0].imagenMesa}`}
              alt="Imagen mesa"
              width={400}
              height={400}
            />
            <div className="absolute h-32 bottom-0 text-2xl bg-gradient-to-b from-transparent to-black/90 w-full pl-5 flex items-end pb-5 text-white">
              {packSeleccionado[0].descripcion}
            </div>
          </div>
          <SeccionMesaPack
            packSeleccionado={packSeleccionado}
            colores={colores}
          />
        </section>
        <h1 className="text-2xl lg:text-4xl flex justify-center w-full lg:mt-10 text-center">
          Selecciona el modelo y formato deseado
        </h1>
        <aside className="flex justify-center gap-4">
          <div
            className={`flex justify-center text-2xl lg:text-3xl py-2 px-4 lg:w-72 cursor-pointer ${
              formatoSeleccionado === "Silla"
                ? "bg-colorBase"
                : "bg-fondoSecundario"
            }`}
            onClick={() => setFormatoSeleccionado("Silla")}
          >
            Silla
          </div>
          <div
            className={`flex justify-center text-2xl py-2 px-4 lg:w-72 items-center cursor-pointer ${
              formatoSeleccionado === "Taburete con respaldo"
                ? "bg-colorBase"
                : "bg-fondoSecundario"
            }`}
            onClick={() => setFormatoSeleccionado("Taburete con respaldo")}
          >
            Taburete con respaldo
          </div>
        </aside>

        <section className="flex flex-wrap lg:grid lg:grid-cols-3 gap-4 lg:gap-10 w-full justify-center">
          <ImagenesSillas
            datos={{
              nombre: "Soria",
              img: formatoSeleccionado === "Silla" ? "SoriaSilla" : "SoriaTab",
              selected: modeloSeleccionada === "Soria",
              onSelect: setModeloSeleccionada,
            }}
          />
          <ImagenesSillas
            datos={{
              nombre: "Onda",
              img: formatoSeleccionado === "Silla" ? "OndaSilla" : "OndaTab",
              selected: modeloSeleccionada === "Onda",
              onSelect: setModeloSeleccionada,
            }}
          />
          <ImagenesSillas
            datos={{
              nombre: "Ker",
              img: formatoSeleccionado === "Silla" ? "KerSilla" : "KerTab",
              selected: modeloSeleccionada === "Ker",
              onSelect: setModeloSeleccionada,
            }}
          />
        </section>

        {modeloSeleccionada !== "" && (
          <>
            <h1 className="text-2xl lg:text-4xl flex justify-center w-full mt-10">
              Aqui tiene los diferentes packs
            </h1>
            <ElegirPack
              mesa={packSeleccionado[0].modelo}
              coloresSilla={coloresSilla}
              modelo={modeloSeleccionada}
              formato={formatoSeleccionado}
            />
          </>
        )}
      </div>
    </div>
  );
}
