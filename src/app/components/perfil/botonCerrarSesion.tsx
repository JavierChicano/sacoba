"use client";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function CerrarSesion() {
  const handleBoton = () => {
    //Al cerrar sesion la sesion se borra
    sessionStorage.clear();
  };

  return (
    <Link href={"/"}>
      <button className="bg-red-300 p-4 m-20 text-black" onClick={handleBoton}>
        Cerrar sesion
      </button>
    </Link>
  );
}
