import CompClienteBanco from "../../components/productos/productoConcretoBanco/compClienteBanco";
import { selectsBancoSeleccionado, selectsColoresBastidorBancos, selectsColoresTapizadoBancos } from "@/db/selects";

export default async function ProductoConcretoBanco({ params }: { params: {modelo: string} }) {
  const promiseBancos = selectsBancoSeleccionado(params.modelo);
  const promiseTapizado = selectsColoresTapizadoBancos();
  const promiseBastidor = selectsColoresBastidorBancos();

  const [bancos, coloresTapizado, coloresBastidor] = await Promise.all([promiseBancos, promiseTapizado, promiseBastidor])


  return ( 
    <main className="flex flex-col items-center p-4 lg:p-0">
        <CompClienteBanco bancoSeleccionado={bancos} coloresTapizado={coloresTapizado} coloresBastidor={coloresBastidor} /> 
    </main>
  );
  
}

