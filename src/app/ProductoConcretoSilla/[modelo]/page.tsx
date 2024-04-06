import CompClienteSilla from "@/app/components/productos/productoConcretoSilla/compClienteSilla";
import { selectsSillaSeleccionada } from "@/db/selects";

export default async function ProductoConcretoSilla({ params }: { params: {modelo: string} }) {
  const sillas = await selectsSillaSeleccionada(params.modelo);

  return (
    <main className="flex flex-col items-center">
        <CompClienteSilla sillaSeleccionada={sillas}/> 
    </main>
  );
  
}

