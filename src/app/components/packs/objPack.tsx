import { TipoPack } from "../../../../tipos/tipos";
import TarjetaDisplayPacks from "./tarjetaPacksInfo";

export default function ObjPack({
  packsModelo,
  packsTotales,
}: {
  packsModelo: TipoPack[];
  packsTotales: TipoPack[];
}) {
  return (
    <section className="w-full grid grid-cols-3 gap-y-5">
      {packsModelo.length > 0 ? (
        packsModelo.map((pack, index) => (
          <TarjetaDisplayPacks
            key={pack.id}
            datos={{
              id: pack.id,
              modelo: pack.modelo,
              imagenMesa: pack.imagenMesa,
              descripcion: pack.descripcion,
              materialTapa: pack.materialTapa,
              dimensiones: pack.dimensiones,
              precioCajon: pack.precioCajon,
              precio: pack.precio,
            }}
            posicion={index}
          />
        ))
      ) : (
        <div>No hay packs disponibles</div>
      )}
      
    </section>
  );
}
