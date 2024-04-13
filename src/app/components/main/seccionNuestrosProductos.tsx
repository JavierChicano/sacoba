import CardProductoAMedida from "./carNuestrosProductosAMedida";
import CardInfoBanco from "./cardInfoBanco";
import CardInfoMesa from "./cardInfoMesa";
import CardInfoSilla from "./cardInfoSilla";

export default function SeccionNuestrosProductos() {
  return (
    <section
      id="productos"
      className="flex flex-col flex-wrap gap-8 max-w-7xl"
    >
      <h1 className="self-center text-5xl">Nuestros productos</h1>
      <div className="flex flex-wrap  gap-8 justify-center">
        <CardInfoMesa />
        <CardInfoSilla />
        <CardInfoBanco />
        <CardProductoAMedida />
      </div>
    </section>
  );
}
