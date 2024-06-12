"use client";
import { useState } from "react";
import LogOut from "./cerrarSesionCookie";
import { useRouter } from "next/navigation";
import {
  IconDoorExit,
  IconNotification,
  IconPackage,
  IconUserScan,
} from "@tabler/icons-react";
import CajaUserInfo from "./cajaInfoUser";

export default function SliderPerfilMovil() {
  const [itemSeleccionado, setItemSeleccionado] = useState("CerrarSesion");
  const router = useRouter();

  const handleBoton = async () => {
    const response = await LogOut();
    if (response) {
      router.push("/");
    } else {
      console.log("Ha sucedido un error");
    }
  };

  return (
    <section className="w-full flex flex-col gap-10 ">
      <aside className="flex justify-between w-fit self-center">
        <div className=" border-x border-gray-400 px-4">
          <IconUserScan
            size={40}
            onClick={() => setItemSeleccionado("Info user")}
            color={itemSeleccionado === "Info user" ? "orange" : "currentColor"}
          />
        </div>
        <div className=" border-x border-gray-400 px-4">
          <IconPackage
            size={40}
            onClick={() => setItemSeleccionado("Pedidos")}
            color={itemSeleccionado === "Pedidos" ? "orange" : "currentColor"}
          />
        </div>
        <div className=" border-x border-gray-400 px-4">
          <IconNotification
            size={40}
            onClick={() => setItemSeleccionado("Notificaciones")}
            color={
              itemSeleccionado === "Notificaciones" ? "orange" : "currentColor"
            }
          />
        </div>
        <div className=" border-x border-gray-400 px-4">
          <IconDoorExit
            size={40}
            color="red"
            onClick={() => setItemSeleccionado("CerrarSesion")}
          />
        </div>
      </aside>
      <div className="border border-fondoSecundario"></div>
      <div>{itemSeleccionado === "Info user" && <CajaUserInfo />} </div>
      <div>
        {itemSeleccionado === "CerrarSesion" && (
          <section className="text-3xl flex flex-col w-full items-center gap-6">
            ¿Desea cerrar sesión?
            <aside className="flex gap-6 w-full">
              <div
                className="bg-green-600 p-2 w-16 flex justify-center flex-grow"
                onClick={handleBoton}
              >
                Sí
              </div>
              <div
                className="bg-red-600 p-2 w-16 flex justify-center flex-grow"
                onClick={() => setItemSeleccionado("Info user")}
              >
                No
              </div>
            </aside>
          </section>
        )}
      </div>
    </section>
  );
}
