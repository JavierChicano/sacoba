import { TipoPack } from "../../../../tipos/tipos";
import TarjetaDisplayPacks from "./tarjetaPacksInfo";

export default function ObjPack({ packsModelo }: { packsModelo: TipoPack[] }) {
  return (
    <section className="w-full grid grid-cols-3 gap-y-5">
      {packsModelo.length > 0 ? (
        packsModelo.map((pack, index) => (
          <TarjetaDisplayPacks key={pack.id} datos={pack} posicion={index} />
        ))
      ) : (
        <div>No hay packs disponibles</div>
      )}
    </section>
  );
}
