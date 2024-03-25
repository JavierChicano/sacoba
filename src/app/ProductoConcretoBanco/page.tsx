import CompClienteBanco from "../components/productos/productoConcretoBanco/compClienteBanco";
import InsertarDatosACarrito from "../components/productos/insertarDatosACarrito";

export default async function ProductoConcretoBanco() {
  return (
    <main className="flex flex-col items-center">
        <CompClienteBanco InsertarDatosACarrito={<InsertarDatosACarrito />}/>
    </main>
  );
}
