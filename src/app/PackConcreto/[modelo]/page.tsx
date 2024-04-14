import CompClientePack from "@/app/components/productos/packConcreto/compClientePack";
import { selectsColoresPacks, selectsPackSeleccionado, selectsPacksModelo } from "@/db/selects";

export default async function PackConcreto({ params }: { params: {modelo: string} }) {
  const promisePackSeleccionado = selectsPackSeleccionado(params.modelo);
  const promiseColores = selectsColoresPacks();

  const [packSeleccionado, colores] = await Promise.all([promisePackSeleccionado, promiseColores])
  
  return (
    <main className="flex flex-col items-center gap-10">
        <CompClientePack packSeleccionado={packSeleccionado} colores={colores} /> 
    </main>
  );
  
}
