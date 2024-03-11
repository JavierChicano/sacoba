"use client"
import { usePathname } from "next/navigation";
import BotonesHeader from "./botonesHeader";
import DivLogo from "./divLogo";
import { useState, useEffect } from "react";
import { cn } from "@nextui-org/react";

export default function Header() {
  const pathName = usePathname();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (pathName === "/ProductoMesa") {
      setBackgroundImage("/portadas/portadaMesas.png");
      setTitle("Mesas de cocina");
    } else if (pathName === "/pagina2") {
      setBackgroundImage("/ruta/de/imagen2.jpg");
      setTitle("Título de la página 2");
    } else {
      setBackgroundImage("");
      setTitle("");
    }
  }, [pathName]);

  return (
    <header className="w-full h-fit flex flex-col items-center bg-center bg-cover" 
      style={{backgroundImage: `url('${backgroundImage}')`}}>
      <DivLogo />
      <BotonesHeader />
      {pathName !== "/" && (
        <h1 className="text-6xl h-96 flex items-center mb-20">{title}</h1>
      )}
    </header>
  );
}
