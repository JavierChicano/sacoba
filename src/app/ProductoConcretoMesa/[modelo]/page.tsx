import { selectsColoresMesas, selectsMesaSeleccionada } from "@/db/selects";
import CompClienteMesa from "../../components/productos/productoConcretoMesa/compClienteMesa";

export default async function ProductoConcreto({ params }: { params: {modelo: string} }) {
  console.log(params.modelo)
  const mesas = await selectsMesaSeleccionada(params.modelo);
  console.log(mesas)
  
  const colores = await  selectsColoresMesas(params.modelo);
  console.log(colores)
  return (
    <main className="flex flex-col items-center p-4 lg:p-0">
      <CompClienteMesa mesaSeleccionada={mesas} colores={colores} />
    </main>
  );
}
