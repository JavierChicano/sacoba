import { cn } from "@nextui-org/react";
import {
  IconSquareRoundedChevronDown,
  IconSquareRoundedChevronUp,
} from "@tabler/icons-react";
import { useState } from "react";
import { usePrecioAcumulado } from "../../../../../states/states";

export default function SeccionOpcionesBanco() {
  const [opcionesDesplegable, setOpcionesDesplegable] = useState(false);
  const { precioAcumulado, setPrecioAcumulado } = usePrecioAcumulado();

  return (
    <section
      className={cn("bg-fondoSecundario flex flex-col gap-4 p-8", {
        "row-span-3": opcionesDesplegable,
      })}
    >
      <div className="flex justify-between items-center h-14">
        <h1 className="text-3xl w-32">Opciones</h1>
        <section className={!opcionesDesplegable ? "flex gap-4" : "hidden"}>
          <div className="bg-colorBase p-2 min-w-24 flex justify-center">
            100x30
          </div>
          <div className="bg-colorBase p-2 min-w-24 flex justify-center">
            Laminado
          </div>
          <div className="bg-colorBase p-2 min-w-24 flex justify-center">
            Blanco
          </div>
        </section>
        <IconSquareRoundedChevronUp
          stroke={2}
          className={opcionesDesplegable ? "block cursor-pointer" : "hidden"}
          onClick={() => setOpcionesDesplegable(!opcionesDesplegable)}
        />
        <IconSquareRoundedChevronDown
          stroke={2}
          className={opcionesDesplegable ? "hidden" : "block cursor-pointer"}
          onClick={() => setOpcionesDesplegable(!opcionesDesplegable)}
        />
      </div>
      <div className={opcionesDesplegable ? "flex flex-col gap-4" : "hidden"}>
        <section>
          <h2 className="text-2xl">Tamaños </h2>
          <div className="flex gap-4 my-2 items-center">
            <span className="bg-colorBase p-1 cursor-pointer hover:bg-colorBase">
              100x30
            </span>
            <span className="bg-fondoTerciario p-1 cursor-pointer hover:bg-colorBase">
              120x50
            </span>
            <span className="bg-fondoTerciario p-1 cursor-pointer hover:bg-colorBase">
              150x80
            </span>
          </div>
        </section>
        <section>
          <h2 className="text-2xl">Material </h2>
          <div className="flex gap-4 my-2 items-center whitespace-nowrap flex-wrap">
            <span className="bg-colorBase p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">
              Laminado
            </span>
            <span className="bg-fondoTerciario p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">
              Cristal 3mm
            </span>
            <span className="bg-fondoTerciario p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">
              Cristal 8mm
            </span>
            <span className="bg-fondoTerciario p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">
              Cristal 8mm extraclaro
            </span>
            <span className="bg-fondoTerciario p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">
              Silestone
            </span>
            <span className="bg-fondoTerciario p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">
              Dekton
            </span>
          </div>
        </section>
        <section>
          <h2 className="text-2xl">Acabado</h2>
          <div className="flex gap-4 my-2 items-center">
            <span className="bg-colorBase p-1 cursor-pointer hover:bg-colorBase min-w-24 flex justify-center">
              Blanco
            </span>
            {/* Boton que abre el modal de los colores para las tapas */}
            <span className="bg-fondoTerciario p-1 cursor-pointer hover:bg-colorBase min-w-24">
              Cambiar color
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}
