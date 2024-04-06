import CompClientePack from "@/app/components/productos/packConcreto/compClientePack";
import { selectsPackSeleccionado } from "@/db/selects";

export default async function PackConcreto({ params }: { params: {modelo: string} }) {
  const pack = await selectsPackSeleccionado(params.modelo);

  return (
    <main className="flex flex-col items-center">
        <CompClientePack packSeleccionado={pack} /> 
    </main>
  );
  
}
