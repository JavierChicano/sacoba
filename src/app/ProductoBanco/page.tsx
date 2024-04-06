import { selectsBancosModelo } from "@/db/selects";
import RutaP from "../components/productos/rutaP";
import SeccionExplicacion from "../components/productos/seccionExplicacion";
import ObjBancosTotales from "../components/productos/productoBanco/objBancosTotales";

export default async function ProductoBanco() {
  const titulo = "Bancos de cocina, perfectos para aprovechar el espacio";
  const explicacionCortaP1 =
    "Descubre la versatilidad y la funcionalidad sin límites con nuestros bancos diseñados para maximizar tu espacio y comodidad. Más que simples asientos, estos bancos son la solución perfecta para aquellos que valoran la practicidad sin sacrificar el estilo.";
  const explicacionCortaP2 =
    "Con un diseño ingenioso que integra espacio de almacenamiento en su interior, nuestros bancos ofrecen una solución elegante para organizar y almacenar tus alimentos de manera ordenada y discreta.";
  
  const bancosModelo =  await selectsBancosModelo();

  return (
    <main className="flex flex-col items-center">
      <div className=" max-w-7xl flex flex-col items-center">
        <RutaP pagina="Bancos" />
        <SeccionExplicacion
          datos={{
            titulo: titulo,
            explicacionp1: explicacionCortaP1,
            explicacionp2: explicacionCortaP2,
          }}
        />
        <ObjBancosTotales bancosModelos={bancosModelo}/>
      </div>
    </main>
  );
}
