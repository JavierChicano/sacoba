export default function DatosBanco({ info }: { info: any }) {
  return (
    <aside>
       {Array.isArray(info.modulos) && info.modulos.length > 0 && (
        <h3>Número de módulos: {info.modulos.length}</h3>
      )}
      <div className="hidden md:block">
        <h3>Acabado tapizado: {info.acabadoTapizado}</h3>
        <h3>Color: {info.colorTapizado}</h3>
        <h3>Acabado bastidor: {info.acabadoBastidor}</h3>
        <h3>Color: {info.colorBastidor}</h3>
      </div>
      {info.zocalo && <h3>Con zócalo integrado</h3>}
      <h3>Cantidad {info.cantidad}</h3>
    </aside>
  );
}
