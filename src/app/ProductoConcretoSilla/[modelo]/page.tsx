import CompClienteSilla from "@/app/components/productos/productoConcretoSilla/compClienteSilla";
import { selectsColoresSillas, selectsSillaSeleccionada } from "@/db/selects";

export default async function ProductoConcretoSilla({ params }: { params: {modelo: string} }) {
  const promiseSillas = selectsSillaSeleccionada(params.modelo);
  const promiseColores = selectsColoresSillas(params.modelo);

  const [sillas, colores] = await Promise.all([promiseSillas, promiseColores])

  console.log
  return (
    <main className="flex flex-col items-center p-4 lg:p-0">
        <CompClienteSilla sillaSeleccionada={sillas} colores={colores}/> 
    </main>
  );
  
}

