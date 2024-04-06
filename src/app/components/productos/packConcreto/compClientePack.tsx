"use client"
import { TipoPack } from "../../../../../tipos/tipos";

export default function CompClientePack({packSeleccionado}: { packSeleccionado: TipoPack[]}) {
return(
    <div>
        {packSeleccionado[0].modelo}
    </div>
)}