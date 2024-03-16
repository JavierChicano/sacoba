import {
  IconSquareRoundedChevronDown,
  IconSquareRoundedChevronUp,
} from "@tabler/icons-react";
import { useState } from "react";


export default function SeccionEncimera() {
  const [encimeraDesplegable, setEncimeraDesplegable] = useState(false);

return(
    <section className="bg-fondoSecundario flex flex-col gap-4 p-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl w-32">Encimera</h1>
              <section className={!encimeraDesplegable ? "flex gap-4" : "hidden"}>
                <div className="bg-colorBase p-2 min-w-24 flex justify-center">100x30</div>
                <div className="bg-colorBase p-2 min-w-24 flex justify-center">Laminado</div>
                <div className="bg-colorBase p-2 min-w-24 flex justify-center">Blanco</div>
              </section>
              <IconSquareRoundedChevronUp
                stroke={2}
                className={
                  encimeraDesplegable ? "block cursor-pointer" : "hidden"
                }
                onClick={() => setEncimeraDesplegable(!encimeraDesplegable)}
              />
              <IconSquareRoundedChevronDown
                stroke={2}
                className={
                  encimeraDesplegable ? "hidden" : "block cursor-pointer"
                }
                onClick={() => setEncimeraDesplegable(!encimeraDesplegable)}
              />
            </div>
            <div className={encimeraDesplegable ? "flex flex-col gap-4" : "hidden"}>
              <section>
                <h2 className="text-2xl">Tamaños </h2>
                <div className="flex gap-4 my-2 items-center">
                  <span className="bg-colorBase p-1 cursor-pointer hover:bg-colorBase">100x30</span>
                  <span className="bg-fondoTerciario p-1 cursor-pointer hover:bg-colorBase">120x50</span>
                  <span className="bg-fondoTerciario p-1 cursor-pointer hover:bg-colorBase">150x80</span>
                </div>
              </section>
              <section>
                <h2 className="text-2xl">Material </h2>
                <div className="flex gap-4 my-2 items-center whitespace-nowrap flex-wrap">
                  <span className="bg-colorBase p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">Laminado</span>
                  <span className="bg-fondoTerciario p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">Cristal 3mm</span>
                  <span className="bg-fondoTerciario p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">Cristal 8mm</span>
                  <span className="bg-fondoTerciario p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">Cristal 8mm extraclaro</span>
                  <span className="bg-fondoTerciario p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">Silestone</span>
                  <span className="bg-fondoTerciario p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">Dekton</span>
                </div>
              </section>
              <section>
                <h2 className="text-2xl">Acabado</h2>
                <div>
                  <aside>
                    {/* display de los grupos en el caso de que sea necesario */}
                  </aside>
                  {/* Aqui van las consultas de los colores en funcion de lo seleccionado */}
                </div>
              </section>
            </div>
          </section>
)
}