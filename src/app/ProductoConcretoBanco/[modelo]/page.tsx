import CompClienteBanco from "../../components/productos/productoConcretoBanco/compClienteBanco";
import InsertarDatosACarrito from "../../components/productos/insertarDatosACarrito";
import { selectsBancoSeleccionado } from "@/db/selects";

export default async function ProductoConcretoBanco({ params }: { params: {modelo: string} }) {
  const bancos = await selectsBancoSeleccionado(params.modelo);

  return (
    <main className="flex flex-col items-center">
        <CompClienteBanco bancoSeleccionado={bancos} InsertarDatosACarrito={<InsertarDatosACarrito />}/> 
    </main>
  );
  
}

