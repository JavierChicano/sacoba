import { selectsMesasNovedad, selectsMesasTendencia } from "@/db/selects";
import { Skeleton, cn } from "@nextui-org/react";
import TarjetaDisplayInfo from "./tarjetaDisplayInfo";

export default async function ObjMesasTendencias() {
  const mesasTendencias = await selectsMesasTendencia();

  return (
    <div
      className={cn(
        mesasTendencias.length > 4
          ? "max-w-7xl flex flex-row overflow-x-scroll gap-4 pb-2"
          : "max-w-7xl flex gap-4 pb-2"
      )}
    >
      {mesasTendencias.length > 0 ? (
        mesasTendencias.map((mesa) => (
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
        <div>No hay mesas en tendencia</div>
      )}
      <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
    </div>
  );
}
