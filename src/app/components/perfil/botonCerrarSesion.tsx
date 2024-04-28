"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSesion } from "../../../../states/states";

export default function CerrarSesion() {
  const { sesionON, setSesionON } = useSesion();

  const handleBoton = () => {
    setSesionON(false);

    //Al cerrar sesion la sesion se borra
    sessionStorage.clear();
  };

  return (
    <Link href={"/"}>
      <button className="bg-red-300 p-2 text-black" onClick={handleBoton}>
        Cerrar sesion
      </button>
    </Link>
  );
}
