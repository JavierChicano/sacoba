export default function DatosMesa({ info }: { info: any }) {
  return (
    <aside className="w-full">
      <h3 className="flex gap-2"><span className="hidden md:block">Dimensiones:</span> {info.dimension} cm</h3>
      <div className="hidden md:block">
        <h3>Acabado: {info.acabado}</h3>
        <h3>Color: {info.color}</h3>
        {info.grupo !== "no hay" && <h3>Grupo: {info.grupo}</h3>}
        {info.grosor !== "no hay" && <h3>Grosor: {info.grosor}</h3>}
      </div>
      <h3>Altura {info.altura}cm</h3>
      <h3>Cantidad {info.cantidad}</h3>
    </aside>
  );
}
