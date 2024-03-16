import { selectsMesasTendencia } from "@/db/selects";
import { Skeleton } from "@nextui-org/react";
import TarjetaDisplayInfo from "./tarjetaDisplayInfo";

export default async function ObjMesasTendencias() {
  const mesasTendencias = await selectsMesasTendencia();
  return (
    <div className="max-w-7xl flex self-start gap-8">
        {mesasTendencias.length > 0 ? (
          mesasTendencias.map((mesa) => (
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
          <div>No hay mesas en tendencia</div>
        )}
      <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
    </div>
  );
}
