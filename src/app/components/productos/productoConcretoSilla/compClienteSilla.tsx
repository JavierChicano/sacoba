"use client"
import { TipoColor, TipoSilla } from "../../../../../tipos/tipos";
import RutaSillaConcreta from "./rutaSillaConcreta";
import Image from "next/image";
import SeccionPersonalizarSilla from "./seccionPersoSilla";

export default function CompClienteSilla({sillaSeleccionada, colores}: {sillaSeleccionada: TipoSilla[], colores: TipoColor[]}) {

    return(
    <div>
      {sillaSeleccionada && (
        <div className=" max-w-7xl grid grid-cols-2 w-full gap-6">
          <RutaSillaConcreta />
          <h1 className="text-4xl border-b-2 border-colorBase col-span-2">
            {sillaSeleccionada[0].modelo}
          </h1>
          <div>
            <Image
              className="w-full h-full max-h-[500px]"
              src={`/productos/sillas/${sillaSeleccionada[0].imagen}`}
              alt="Imagen mesa"
              width={500}
              height={500}
            />
          </div>
          <SeccionPersonalizarSilla sillaSeleccionada={sillaSeleccionada} colores={colores} />
        </div>
      )}
    </div>
)
}