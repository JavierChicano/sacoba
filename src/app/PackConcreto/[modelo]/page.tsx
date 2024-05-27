import CompClientePack from "@/app/components/productos/packConcreto/compClientePack";
import { selectsColoresPacks, selectsColoresTapizadoBancos, selectsPackSeleccionado } from "@/db/selects";

export default async function PackConcreto({ params }: { params: {modelo: string} }) {
  const promisePackSeleccionado = selectsPackSeleccionado(params.modelo);
  const promiseColores = selectsColoresPacks();
  const promiseColoresSillas = selectsColoresTapizadoBancos();

  const [packSeleccionado3, colores, coloresSillas] = await Promise.all([promisePackSeleccionado, promiseColores, promiseColoresSillas])
  
  return (
    <main className="flex flex-col items-center gap-10">
        <CompClientePack packSeleccionado={packSeleccionado3} colores={colores} coloresSilla={coloresSillas} /> 
    </main>
  );
  
}
