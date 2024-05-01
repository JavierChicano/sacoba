import SeccionInfo from "./components/main/seccionInfo";
import SeccionNuestrosProductos from "./components/main/seccionNuestrosProductos";
import SeccionMarcas from "./components/main/seccionMarcas";
import TextoAnimado from "./components/main/textoAnimado";
import Image from "next/image";
import Sacoba from "./components/main/sacoba";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <Sacoba/> */}
      <TextoAnimado /> 
      <h1 className="text-6xl text-contraste mt-20 m-2 animate-bounce animate-once animate-duration-[3000ms] animate-delay-2000 animate-ease-linear animate-fill-both" >
        Encuentra el producto que encaje contigo
      </h1>
      <Image
        className="w-3/4 h-auto -mb-48"
        src="/portadas/portadaMain.png"
        alt="Mesa del main"
        width={1920}
        height={1080}
      />
      <SeccionInfo />
      <SeccionNuestrosProductos />
      <SeccionMarcas />
    </main>
  );
}