import {
  selectsSillasModelo,
  selectsSillasNovedad,
  selectsSillasTendencia,
} from "@/db/selects";
import ObjSillasTendencias from "../components/productos/productoSilla/objSillasTendencia";
import RutaP from "../components/productos/rutaP";
import SeccionExplicacion from "../components/productos/seccionExplicacion";
import ObjSillasNovedades from "../components/productos/productoSilla/objSillasNovedad";
import ObjSillasTotales from "../components/productos/productoSilla/objSillasTotales";
const titulo = "Sillas de cocina, adaptadas a la ergonomía";
const explicacionCortaP1 =
  "Sumérgete en la excelencia del diseño y la comodidad con nuestras sillas cuidadosamente seleccionadas. Diseñadas con un equilibrio perfecto entre funcionalidad y estilo, estas sillas son el complemento ideal para cualquier ambiente moderno y sofisticado.";
const explicacionCortaP2 =
  "Fabricadas con atención meticulosa a los detalles, nuestras sillas son una fusión de calidad premium y elegancia contemporánea. Desde maderas nobles hasta materiales innovadores, cada pieza está elaborada para ofrecer una combinación única de durabilidad y sofisticación. ";

export default async function ProductoSilla() {
  const promiseSillasNovedad = selectsSillasNovedad();
  const promiseSillasTendencias = selectsSillasTendencia();
  const promiseSillasModelos = selectsSillasModelo();

  const [sillasNovedad, sillasTendencias, sillasModelos] = await Promise.all([
    promiseSillasNovedad,
    promiseSillasTendencias,
    promiseSillasModelos,
  ]);

  return (
    <main className="flex flex-col items-center">
      <div className="w-screen lg:max-w-7xl flex flex-col items-center p-4 lg:p-0">
        <RutaP pagina="Sillas" />
        <SeccionExplicacion
          datos={{
            titulo: titulo,
            explicacionp1: explicacionCortaP1,
            explicacionp2: explicacionCortaP2,
          }}
        />
        <ObjSillasTendencias sillasTendencia={sillasTendencias} />
        <ObjSillasNovedades sillasTendencia={sillasNovedad}/>
        <ObjSillasTotales sillasTotales={sillasModelos}/>
      </div>
    </main>
  );
}
