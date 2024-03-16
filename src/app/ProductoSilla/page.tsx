import Ruta from "../components/productos/ruta";
import SeccionExplicacion from "../components/productos/seccionExplicacion";

export default function ProductoSilla() {
  const titulo = "Sillas de cocina, adaptadas a la ergonomía";
  const explicacionCortaP1 =
    "Sumérgete en la excelencia del diseño y la comodidad con nuestras sillas cuidadosamente seleccionadas. Diseñadas con un equilibrio perfecto entre funcionalidad y estilo, estas sillas son el complemento ideal para cualquier ambiente moderno y sofisticado.";
  const explicacionCortaP2 =
    "Fabricadas con atención meticulosa a los detalles, nuestras sillas son una fusión de calidad premium y elegancia contemporánea. Desde maderas nobles hasta materiales innovadores, cada pieza está elaborada para ofrecer una combinación única de durabilidad y sofisticación. ";

  return (
    <main className="flex flex-col items-center">
      <div className=" max-w-7xl flex flex-col items-center">
        <Ruta pagina="Sillas" />
        <SeccionExplicacion
          datos={{
            titulo: titulo,
            explicacionp1: explicacionCortaP1,
            explicacionp2: explicacionCortaP2,
          }}
        />
        <h1 className="self-start text-4xl py-10">Tendencias</h1>
        <h1 className="self-start text-4xl py-10">Novedades</h1>
      </div>
    </main>
  );
}
