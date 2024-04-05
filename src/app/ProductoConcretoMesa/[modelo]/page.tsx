import { selectsMesaSeleccionada } from "@/db/selects";
import CompClienteMesa from "../../components/productos/productoConcretoMesa/compClienteMesa";

export default async function ProductoConcreto({ params }: { params: {modelo: string} }) {
  const mesas = await selectsMesaSeleccionada(params.modelo);

  return (
    <main className="flex flex-col items-center">
      <CompClienteMesa mesaSeleccionada={mesas} />{" "}
    </main>
  );
}
