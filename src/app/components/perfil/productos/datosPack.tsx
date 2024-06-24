export default function DatosPack({ info }: { info: any }) {
    return (
      <aside>
        <h3>{info.packElegido}</h3>
        <h3 className="flex gap-2"><span className="hidden md:block">Dimensiones:</span> {info.dimension} cm</h3>
        <div className="hidden md:block">
          <h3>Acabado: {info.acabado}</h3>
          <h3>Color: {info.color}</h3>
          {info.packElegico !== "Mesa" && <h3>{info.tapizadoSilla}</h3>}
          {info.packElegico !== "Mesa" && <h3>Color: {info.colorSilla}</h3>}
          {info.cantidadSillasExtra !== 0 && <h3>Con {info.cantidadSillasExtra} unidades extra</h3>}
        </div>
      </aside>
    );
  }
  