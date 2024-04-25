"use client"
import Link from "next/link";
import { redirect } from "next/navigation";

export default function CerrarSesion(){
    const handleBoton = () => {
        console.log("lfjelj")
      sessionStorage.setItem("sesionIniciada", "false");
      };
    
    return(
        <Link href={"/"}>
    <button className="bg-red-300 p-4 m-20 text-black" onClick={handleBoton}>Cerrar sesion</button></Link>
    )
}