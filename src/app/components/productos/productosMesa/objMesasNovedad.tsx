import { selectsMesasNovedad } from "@/db/selects";
import { Skeleton, cn } from "@nextui-org/react";
import TarjetaDisplayInfo from "./tarjetaDisplayInfo";

export default async function ObjMesasNovedades() {
  const mesasNovedad = await selectsMesasNovedad();

  return (
    <div className={cn(
      mesasNovedad.length > 4
        ? "max-w-7xl flex flex-row overflow-x-scroll gap-4 pb-2"
        : "max-w-7xl flex gap-4 pb-2"
    )}>
      {mesasNovedad.length > 0 ? (
        mesasNovedad.map((mesa) => (
          <TarjetaDisplayInfo
            key={mesa.id}
            datos={{
              id: mesa.id,
              modelo: mesa.modelo,
              imagen: mesa.imagen,
              tipoBase: mesa.tipoBase,
              extension: mesa.extension,
              tipoAmpliable: mesa.tipoAmpliable,
              auxiliar: mesa.auxiliar,
              materialTapa: mesa.materialTapa,
              colorTapa: mesa.colorTapa,
              dimensiones: mesa.dimensiones,
              altura: mesa.altura,
              materialPata: mesa.materialPata,
              colorPata: mesa.colorPata,
              precio: mesa.precio,
            }}
          />
        ))
      ) : (
        <div>No hay mesas nuevas</div>
      )}
      <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
    </div>
  );
}
