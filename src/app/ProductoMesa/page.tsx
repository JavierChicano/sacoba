import Image from "next/image";
import Ruta from "../components/productosMesa/ruta";

export default function ProductoMesa() {
  return (
    <main className="flex flex-col items-center">
      <div className="absolute top-0 -z-10 w-full">
        <Image
          className="w-full h-[80vh]"
          src="/portadas/portadaMesas.png"
          alt="Logo de la marca"
          width={1920}
          height={900}
        />
      </div>
      <h1 className="text-5xl pt-[15vh] pb-[35vh]">Mesas de cocina</h1>
      <Ruta/>
    </main>
  );
}
