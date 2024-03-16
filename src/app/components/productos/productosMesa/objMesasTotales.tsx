import { selectsMesasTotales } from "@/db/selects";
import { Skeleton } from "@nextui-org/react";
import TarjetaDisplayInfo from "./tarjetaDisplayInfo";

export default async function ObjMesasTotales() {
  const mesasTotales = await selectsMesasTotales();

  return (
    <>
    <h1 className="self-start text-xl pt-10 pb-5">Mesas totales ({mesasTotales.length})</h1>
    <div className="max-w-7xl w-full self-start gap-4 grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {mesasTotales.length > 0 ? (
          mesasTotales.map((mesa) => (
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
          <div>No hay mesas disponibles</div>
        )}
      <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
    </div>
    </>
  );
}
