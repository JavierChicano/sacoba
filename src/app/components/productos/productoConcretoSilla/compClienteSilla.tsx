"use client"
import { TipoSilla } from "../../../../../tipos/tipos";

export default function CompClienteSilla({sillaSeleccionada}: {sillaSeleccionada: TipoSilla[]}) {
return(
    <div>
        {sillaSeleccionada[0].modelo}
    </div>
)
}