import { Button } from "@nextui-org/react";
import SeccionInfo from "./components/main/seccionInfo";
import SeccionImaginacion from "./components/main/seccionImaginacion";
import SeccionNuestrosProductos from "./components/main/seccionNuestrosProductos";
import SeccionMarcas from "./components/main/seccionMarcas";
import TextoAnimado from "./components/main/textoAnimado";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <TextoAnimado />

      <h1 className="text-6xl text-white mt-20 m-2 animate-slide-in-bottom animate-duration-[15000]">
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
