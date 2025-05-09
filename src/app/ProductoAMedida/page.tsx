import Link from "next/link";
import RutaP from "../components/productos/rutaP";
import CuadroEleccion from "./cuadradroEleccion";

export default function ProductoAMedida() {
  return (
    <main className="flex flex-col items-center p-4 lg:p-0">
      <div className="max-w-7xl flex flex-col items-center">
        <RutaP pagina="A medida" />
        <div className="w-full flex flex-col items-center gap-8">
          <h1 className="text-3xl lg:text-5xl">
            Para maximizar la experiencia elija su prioridad
          </h1>
          <h3 className="max-w-xl flex-wrap">
            No todas las patas y tapas son compatibles entre sí, por ello es
            necesario que elija por donde quiere comenzar, para darle prioridad
            a ello
          </h3>
        </div>
        <CuadroEleccion />
        <section className="flex justify-center lg:gap-12 gap-4 flex-col lg:flex-row">
          <h3 className="lg:w-1/3">
            Para medidas que no esten reflejadas, se recomienda consultar para
            ver si hay disponibilidad, al igual que para Silestone o Dekton de
            otros grupos o grosores
          </h3>
          <span className="lg:w-1/3 flex justify-center">
            <Link href="/Contacto/">
            <button className="text-2xl p-4 bg-fondoSecundario hover:bg-colorBase hover:text-black">
              Consultar
            </button>
            </Link>
          </span>{" "}
        </section>
      </div>
    </main>
  );
}
