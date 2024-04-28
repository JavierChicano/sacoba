"use client";
import { useSesion } from "../../../../states/states";
import CerrarSesion from "./botonCerrarSesion";
import CajaUserInfo from "./cajaInfoUser";
import HoverBotonPerfil from "./hoverBotonesPerfil";

export default function SliderPerfil() {
  return (
    <section className="w-full grid grid-cols-[1fr_2px_5fr] gap-10">
      <aside className="flex flex-col gap-12 text-2xl">
        <h1 className="text-5xl">Cuenta</h1>
        <ul className="flex flex-col gap-6">
          <HoverBotonPerfil>
            <li>Info user</li>
          </HoverBotonPerfil>
          <HoverBotonPerfil>
            <li>Guardados</li>
          </HoverBotonPerfil>
          <HoverBotonPerfil>
            <li>Pedidos</li>
          </HoverBotonPerfil>
          <HoverBotonPerfil>
            <li>Notificaciones</li>
          </HoverBotonPerfil>
        </ul>
        <CerrarSesion />
      </aside>
      <div className="border border-fondoSecundario"></div>
      <div>
        <CajaUserInfo />
      </div>
    </section>
  );
}
