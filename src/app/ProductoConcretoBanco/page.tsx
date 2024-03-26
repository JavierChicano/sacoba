import CompClienteBanco from "../components/productos/productoConcretoBanco/compClienteBanco";
import InsertarDatosACarrito from "../components/productos/insertarDatosACarrito";
import { NextPageContext } from 'next';
export default async function ProductoConcretoBanco(props: NextPageContext) {
  
  console.log(props)
  return (
    <main className="flex flex-col items-center">
        <CompClienteBanco InsertarDatosACarrito={<InsertarDatosACarrito />}/>
    </main>
  );
}

ProductoConcretoBanco.getInitialProps = (context: NextPageContext) => {
  const { query, res } = context;
  const { modelo } = query;
  return { query };
};