export default function DatosSilla({ info }: { info: any }) {
    return (
      <aside>
        <h3>Formato: {info.formato}</h3>
        <div className="hidden md:block">
          <h3>Acabado: {info.acabado}</h3>
          <h3>Color asiento: {info.color}</h3>
          <h3>Color patas: {info.colorPata}</h3>
        </div>
        <h3>Cantidad {info.cantidad}</h3>
      </aside>
    );
  }
  