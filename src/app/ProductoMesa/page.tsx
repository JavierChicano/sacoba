import { selectsMesasModelo, selectsMesasNovedad, selectsMesasTendencia } from "@/db/selects";
import ObjMesasNovedades from "../components/productos/productosMesa/objMesasNovedad";
import ObjMesasTendencias from "../components/productos/productosMesa/objMesasTendencias";
import ObjMesasTotales from "../components/productos/productosMesa/objMesasTotales";
import RutaP from "../components/productos/rutaP";
import SeccionExplicacion from "../components/productos/seccionExplicacion";
const titulo = "Mesas de cocina, materiales premiun y personalizables";
const explicacionCortaP1 =
  "Una fusión de estilo, funcionalidad y calidad excepcionales para tu hogar. Diseñada meticulosamente para complementar cualquier cocina contemporánea, esta mesa es más que un simple mueble; es una declaración de elegancia y practicidad.";
const explicacionCortaP2 =
  "Nuestra mesa de cocina está fabricada con materiales de primera calidad, cuidadosamente seleccionados para garantizar durabilidad y estilo sofisticado. Utilizamos maderas finas, como roble o nogal, conocidas por su resistencia y belleza natural, o materiales compuestos de alta calidad que combinan la elegancia del mármol o el granito con la facilidad de mantenimiento del material sintético. Cada detalle está cuidadosamente elaborado para ofrecer una estética excepcional y una durabilidad sin igual.";

export default async function ProductoMesa() {
  const promiseMesasNovedad = selectsMesasNovedad();
  const promiseMesasTendencias = selectsMesasTendencia();
  const promiseMesasModelos = selectsMesasModelo();

  const [mesasNovedad, mesasTendencias, mesasModelos] = await Promise.all([promiseMesasNovedad, promiseMesasTendencias, promiseMesasModelos])
  console.log(mesasNovedad)
  console.log(mesasTendencias)
  console.log(mesasModelos)
  return (
    <main className="flex flex-col items-center">
      <div className="w-screen lg:max-w-7xl flex flex-col items-center p-4 lg:p-0">
        <RutaP pagina="Mesas" />
        <SeccionExplicacion
          datos={{
            titulo: titulo,
            explicacionp1: explicacionCortaP1,
            explicacionp2: explicacionCortaP2,
          }}
        />
        {/* Seccion mesas novedades */}
        <ObjMesasTendencias mesasTendencias={mesasTendencias}/>

        {/* Seccion mesas novedades */}
        <ObjMesasNovedades mesasNovedad={mesasNovedad}/>

        {/* Apartado todas las mesas */}
        <ObjMesasTotales mesasTotales={mesasModelos} />
      </div>
    </main>
  );
}
