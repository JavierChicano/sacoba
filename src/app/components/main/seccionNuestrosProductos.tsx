import BotonCatalogo from "./botonCatalogo";
import CardProductoAMedida from "./carNuestrosProductosAMedida";
import CardInfoBanco from "./cardInfoBanco";
import CardInfoMesa from "./cardInfoMesa";
import CardInfoSilla from "./cardInfoSilla";

export default function SeccionNuestrosProductos() {
  return (
    <section id="productos" className="flex flex-col flex-wrap gap-8 lg:max-w-7xl mt-10">
      <h1 className="self-center text-3xl lg:text-6xl">Nuestros productos</h1>
      <BotonCatalogo/>
      <div className="flex flex-wrap  gap-8 justify-center">
        <CardInfoMesa />
        <CardInfoSilla />
        <CardInfoBanco />
        <CardProductoAMedida />
      </div>
    </section>
  );
}
