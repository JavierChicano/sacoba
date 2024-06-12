"use client";
import { useState } from "react";
import CerrarSesion from "./botonCerrarSesion";
import CajaUserInfo from "./cajaInfoUser";
import HoverBotonPerfil from "./hoverBotonesPerfil";

export default function SliderPerfil() {
  const [itemSeleccionado, setItemSeleccionado] = useState('Info user');
  return (
    <section className="w-full grid grid-cols-[1fr_2px_5fr] gap-10">
      <aside className="flex flex-col gap-12 text-2xl">
        <h1 className="text-5xl">Cuenta</h1>
        <ul className="flex flex-col gap-6">
          <HoverBotonPerfil>
            <li onClick={() => setItemSeleccionado('Info user')}>Usuario</li>
          </HoverBotonPerfil>
          <HoverBotonPerfil>
            <li onClick={() => setItemSeleccionado('Pedidos')}>Pedidos</li>
          </HoverBotonPerfil>
          <HoverBotonPerfil>
            <li onClick={() => setItemSeleccionado('Notificaciones')}>Notificaciones</li>
          </HoverBotonPerfil>
        </ul>
        <CerrarSesion />
      </aside>
      <div className="border border-fondoSecundario"></div>
      <div>
        {itemSeleccionado === "Info user" && <CajaUserInfo />}
      </div>
    </section>
  );
}
