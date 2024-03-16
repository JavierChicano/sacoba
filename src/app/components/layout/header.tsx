"use client"
import { usePathname } from "next/navigation";
import BotonesHeader from "./botonesHeader";
import DivLogo from "./divLogo";
import { useState, useEffect } from "react";

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
      {title && (
        <h1 className="text-6xl h-96 flex items-center mb-20">{title}</h1>
      )}
    </header>
  );
}
