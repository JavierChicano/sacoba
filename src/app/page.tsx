"use client"
import SeccionInfo from "./components/main/seccionInfo";
import SeccionImaginacion from "./components/main/seccionImaginacion";
import SeccionNuestrosProductos from "./components/main/seccionNuestrosProductos";
import SeccionMarcas from "./components/main/seccionMarcas";
import TextoAnimado from "./components/main/textoAnimado";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useCambioTema } from "../../states/states";
import { useEffect } from "react";

export default function Home() {
  const { cambioTema } = useCambioTema();
  const { setTheme } = useTheme(); // Usa el hook useTheme para obtener la función setTheme

  useEffect(() => {
    setTheme(cambioTema ? "light" : "dark");
    console.log(cambioTema)
  }, [cambioTema, setTheme]);
  return (
    <main className="flex flex-col items-center">
      <TextoAnimado />
      <h1 className="text-6xl text-white mt-20 m-2 animate-bounce animate-once animate-duration-[3000ms] animate-delay-2000 animate-ease-linear animate-fill-both" >
        Encuentra la mesa que encaje contigo
      </h1>
      <Image
        className="w-3/4 h-auto"
        src="/portadas/portadaMain.png"
        alt="Logo de la marca"
        width={1920}
        height={1080}
      />
       <button className="bg-fondoTerciario p-2 -mt-[50vh] text-2xl hover:bg-colorBase hover:text-black">Crea tu mesa</button>
      <SeccionInfo />
  
      <SeccionImaginacion />
      <SeccionNuestrosProductos />
      <SeccionMarcas />
    </main>
  );
}
