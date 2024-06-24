"use client";
import { useEffect, useState } from "react";
import CerrarSesion from "./botonCerrarSesion";
import CajaUserInfo from "./cajaInfoUser";
import HoverBotonPerfil from "./hoverBotonesPerfil";
import { LeerDatosCookie } from "./cookiePerfil";
import CajaPedidos from "./cajaPedidos";
interface Usuario {
  nombre: string;
  apellidos: string;
  correoElectronico: string;
}

export default function SliderPerfil({ ruta }: { ruta: string }) {
  const [itemSeleccionado, setItemSeleccionado] = useState("Info user");
  const [usuario, setUsuario] = useState<Usuario>();

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const cookie = await LeerDatosCookie();
        if (cookie.status) {
          setUsuario(cookie.usuario);
        } else {
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    obtenerUsuario();
  }, []);

  //Comprobar en la URL si queremos ir a una seccion en concreto directamente
  useEffect(() => {
    if (ruta === "InfoUser") {
      setItemSeleccionado("Info user");
    } else if (ruta === "pedidos") {
      setItemSeleccionado("Pedidos");
    } else if (ruta === "notificaciones") {
      setItemSeleccionado("Notificaciones");
    }
  }, [ruta]);

  return (
    <section className="w-full hidden md:grid grid-cols-[1fr_2px_5fr] gap-10">
      <aside className="flex flex-col gap-12 text-2xl">
        <h1 className="text-5xl">Cuenta</h1>
        <ul className="flex flex-col gap-6">
          <HoverBotonPerfil>
            <li
              onClick={() => setItemSeleccionado("Info user")}
              className={`${
                itemSeleccionado === "Info user"
                  ? "text-colorBase"
                  : "text-contraste"
              }`}
            >
              Usuario
            </li>
          </HoverBotonPerfil>
          <HoverBotonPerfil>
            <li
              onClick={() => setItemSeleccionado("Pedidos")}
              className={`${
                itemSeleccionado === "Pedidos"
                  ? "text-colorBase"
                  : "text-contraste"
              }`}
            >
              Pedidos
            </li>
          </HoverBotonPerfil>
          <HoverBotonPerfil>
            <li
              onClick={() => setItemSeleccionado("Notificaciones")}
              className={`${
                itemSeleccionado === "Notificaciones"
                  ? "text-colorBase"
                  : "text-contraste"
              }`}
            >
              Notificaciones
            </li>
          </HoverBotonPerfil>
        </ul>
        <CerrarSesion />
      </aside>
      <div className="border border-fondoSecundario"></div>
      <section className="min-h-[53vh]">
        <div>
          {itemSeleccionado === "Info user" && (
            <CajaUserInfo usuario={usuario} />
          )}
        </div>
        <div>
          {itemSeleccionado === "Pedidos" && (
            <CajaPedidos correoElectronico={usuario?.correoElectronico} />
          )}
        </div>
      </section>
    </section>
  );
}
