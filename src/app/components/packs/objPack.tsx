import { TipoPack } from "../../../../tipos/tipos";
import TarjDisplayPacksMovil from "./tarjPackInfoMovil";
import TarjetaDisplayPacks from "./tarjetaPacksInfo";

export default function ObjPack({ packsModelo }: { packsModelo: TipoPack[] }) {
  return (
    <>
      <section className="hidden w-full lg:grid grid-cols-3 gap-y-5">
        {packsModelo.length > 0 ? (
          packsModelo.map((pack, index) => (
            <TarjetaDisplayPacks key={pack.id} datos={pack} posicion={index} />
          ))
        ) : (
          <div>No hay packs disponibles</div>
        )}
      </section>
      {/* Seccion de tarjetas para vista movil */}
      <section className="w-full flex flex-col gap-y-5 lg:hidden">
        {packsModelo.length > 0 ? (
          packsModelo.map((pack, index) => (
            <TarjDisplayPacksMovil
              key={pack.id}
              datos={pack}
            />
          ))
        ) : (
          <div>No hay packs disponibles</div>
        )}
      </section>
    </>
  );
}
