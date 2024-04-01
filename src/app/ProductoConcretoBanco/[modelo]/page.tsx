import CompClienteBanco from "../../components/productos/productoConcretoBanco/compClienteBanco";
import InsertarDatosACarrito from "../../components/productos/insertarDatosACarrito";
import { NextPageContext } from 'next';
import { selectsBancosPrueba } from "@/db/selects";

async function ProductoConcretoBanco({ params }: { params: {modelo: string} }) {
  console.log("MODELO DE LA PAGINA", params.modelo)
  const bancos = await selectsBancosPrueba(params.modelo);
  return (
    <main className="flex flex-col items-center">
        <CompClienteBanco bancoSeleccionado={bancos} InsertarDatosACarrito={<InsertarDatosACarrito />}/> 
    </main>
  );
  
}

export default ProductoConcretoBanco;
