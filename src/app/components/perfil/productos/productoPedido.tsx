import Image from "next/image";
import DatosMesa from "./datosMesa";
import DatosSilla from "./datosSilla";
import DatosBanco from "./datosBanco";
import DatosPack from "./datosPack";

export default function MostrarProductoPedido({ producto }: { producto: any }) {
  const info = JSON.parse(producto.producto);
  console.log(info)
  let componenteDatos;

  //Para cargar el componente que muestra la informacion en concreto de ese producto
  switch (info.producto.toLowerCase()) {
    case 'mesa':
      componenteDatos = <DatosMesa info={info} />;
      break;
    case 'silla':
      componenteDatos = <DatosSilla info={info} />;
      break;
    case 'banco':
      componenteDatos = <DatosBanco info={info} />;
      break;
    case 'pack':
      componenteDatos = <DatosPack info={info} />;
      break;
  }

  return (
    <section className="grid grid-cols-2">
      <Image
        className="w-3/4 h-full"
        src={`/productos/${info.producto.toLowerCase()}s/${info.modelo.toLowerCase()}.png`}
        alt="Mesa del main"
        width={300}
        height={300}
      />
      <article className="flex flex-col gap-4">
        <div className="flex text-2xl gap-2 border-b border-colorBaseSecundario">
          <h1>{info.producto}</h1>
          <h1>-</h1>
          <h2>{info.modelo}</h2>
        </div>
        {componenteDatos}
      </article>
    </section>
  );
}
