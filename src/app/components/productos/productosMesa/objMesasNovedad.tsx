import { selectsMesasNovedad } from "@/db/selects";
import { Skeleton } from "@nextui-org/react";
import TarjetaDisplayInfo from "./tarjetaDisplayInfo";

export default async function ObjMesasNovedades() {
  const mesasNovedad = await selectsMesasNovedad();

  return (
    <div className="max-w-7xl flex self-start gap-8">
        {mesasNovedad.length > 0 ? (
          mesasNovedad.map((mesa) => (
            <TarjetaDisplayInfo
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
