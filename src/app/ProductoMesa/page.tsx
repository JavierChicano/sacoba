import ObjMesasNovedades from "../components/productos/productosMesa/objMesasNovedad";
import ObjMesasTendencias from "../components/productos/productosMesa/objMesasTendencias";
import ObjMesasTotales from "../components/productos/productosMesa/objMesasTotales";
import RutaP from "../components/productos/rutaP";
import SeccionExplicacion from "../components/productos/seccionExplicacion";

export default async function ProductoMesa() {
  const titulo = "Mesas de cocina, materiales premiun y personalizables";
  const explicacionCortaP1 =
    "Una fusión de estilo, funcionalidad y calidad excepcionales para tu hogar. Diseñada meticulosamente para complementar cualquier cocina contemporánea, esta mesa es más que un simple mueble; es una declaración de elegancia y practicidad.";
  const explicacionCortaP2 =
    "Nuestra mesa de cocina está fabricada con materiales de primera calidad, cuidadosamente seleccionados para garantizar durabilidad y estilo sofisticado. Utilizamos maderas finas, como roble o nogal, conocidas por su resistencia y belleza natural, o materiales compuestos de alta calidad que combinan la elegancia del mármol o el granito con la facilidad de mantenimiento del material sintético. Cada detalle está cuidadosamente elaborado para ofrecer una estética excepcional y una durabilidad sin igual.";
  
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-7xl flex flex-col items-center">
        <RutaP pagina="Mesas" />
        <SeccionExplicacion
          datos={{
            titulo: titulo,
            explicacionp1: explicacionCortaP1,
            explicacionp2: explicacionCortaP2,
          }}
        />
        <h1 className="self-start text-4xl pt-10 pb-5">Tendencias</h1>
        {/* hacer con overflow-r que desborde por la derecha el contenido y seha deslizable */}
        <ObjMesasTendencias/>
        <h1 className="self-start text-4xl pt-10 pb-5">Novedades</h1>
        <ObjMesasNovedades/>
        {/* Apartado todas las mesas */}
        <ObjMesasTotales/>
      </div>
    </main>
  );
}
