"use client";
import { usePathname } from "next/navigation";
import BotonesHeader from "./botonesHeader";
import DivLogo from "./divLogo";
import { useState, useEffect } from "react";
import { cn } from "@nextui-org/react";
import BotonesHeaderMovil from "./botonesHeaderMovil";

export default function Header() {
  const pathName = usePathname();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (pathName === "/ProductoMesa") {
      setBackgroundImage("/portadas/portadaMesas.png");
      setTitle("Mesas de cocina");
    } else if (pathName === "/ProductoSilla") {
      setBackgroundImage("/portadas/portadaSillas.png");
      setTitle("Sillas de cocina");
    } else if (pathName === "/ProductoBanco") {
      setBackgroundImage("/portadas/portadaBancos.png");
      setTitle("Bancos de cocina");
    } else if (pathName === "/ProductoAMedida") {
      setBackgroundImage("/portadas/portadaAMedida.png");
      setTitle("Diseña a tu gusto");
    } else {
      setBackgroundImage("");
      setTitle("");
    }
  }, [pathName]);

  return (
    <header
    className={cn({
      'w-full h-fit flex flex-col items-center bg-center bg-cover': !['/Login', '/Registro', '/Cuenta'].includes(pathName),
      'hidden': ['/Login', '/Registro', '/Cuenta'].includes(pathName)
    })}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      
    >
      <DivLogo />
      <BotonesHeader/>
      {title && (
        <h1 className="text-4xl lg:text-6xl h-60 lg:h-96 flex items-center lg:mb-20">{title}</h1>
      )}
    </header>
  );
}
