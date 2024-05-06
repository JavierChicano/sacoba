import { selectsColoresMesas, selectsMesaSeleccionada } from "@/db/selects";
import CompClienteMesa from "../../components/productos/productoConcretoMesa/compClienteMesa";

export default async function ProductoConcreto({ params }: { params: {modelo: string} }) {
  const promiseMesas = selectsMesaSeleccionada(params.modelo);
  const promiseColores = selectsColoresMesas();
  const [mesas, colores] = await Promise.all([promiseMesas, promiseColores])

  return (
    <main className="flex flex-col items-center">
      <CompClienteMesa mesaSeleccionada={mesas} colores={colores} />
    </main>
  );
}
