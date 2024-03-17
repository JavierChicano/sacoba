import RutaP from "../components/productos/rutaP";
import CuadroEleccion from "./cuadradroEleccion";

export default function ProductoAMedida() {

  return (
    <main className="flex flex-col items-center">
      <div className="max-w-7xl flex flex-col items-center">
        <RutaP pagina="A medida" />
        <div className="w-full flex flex-col items-center gap-8">
          <h1 className="text-5xl">
            Para maximizar la experiencia elija su prioridad
          </h1>
          <h3 className="max-w-xl">
            No todas las patas y tapas son compatibles entre sí, por ello en
            necesario que elija por donde quiere comenzar, para darle prioridad
            a ello
          </h3>
        </div>
        <CuadroEleccion/>
      </div>
    </main>
  );
}
