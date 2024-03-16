import {
    IconSquareRoundedChevronDown,
    IconSquareRoundedChevronUp,
  } from "@tabler/icons-react";
  import { useState } from "react";
  
  
  export default function SeccionEstructura() {
    const [estructuraDesplegable, setEstructuraDesplegable] = useState(false);
  
  return(
      <section className="bg-fondoSecundario flex flex-col gap-4 p-8">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl w-32">Estructura</h1>
                <section className={!estructuraDesplegable ? "flex gap-4" : "hidden"}>
                  <div className="bg-colorBase p-2 min-w-24 flex justify-center">77</div>
                  <div className="bg-colorBase p-2 min-w-24 flex justify-center">Acero</div>
                  <div className="bg-colorBase p-2 min-w-24 flex justify-center">Negro</div>
                </section>
                <IconSquareRoundedChevronUp
                  stroke={2}
                  className={
                    estructuraDesplegable ? "block cursor-pointer" : "hidden"
                  }
                  onClick={() => setEstructuraDesplegable(!estructuraDesplegable)}
                />
                <IconSquareRoundedChevronDown
                  stroke={2}
                  className={
                    estructuraDesplegable ? "hidden" : "block cursor-pointer"
                  }
                  onClick={() => setEstructuraDesplegable(!estructuraDesplegable)}
                />
              </div>
              <div className={estructuraDesplegable ? "flex flex-col gap-4" : "hidden"}>
                <section>
                  <h2 className="text-2xl">Altura </h2>
                  <div className="flex gap-4 my-2 items-center">
                    <span className="bg-colorBase p-1 cursor-pointer hover:bg-colorBase w-24 flex justify-center">77</span>
                    <span className="bg-fondoTerciario p-1 cursor-pointer hover:bg-colorBase w-24 flex justify-center">92</span>
                    <span className="bg-fondoTerciario p-1 cursor-pointer hover:bg-colorBase w-24 flex justify-center">112</span>
                  </div>
                </section>
                <section>
                  <h2 className="text-2xl">Material </h2>
                  <div className="flex gap-4 my-2 items-center whitespace-nowrap flex-wrap">
                    <span className="bg-colorBase p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">Acero</span>
                    <span className="bg-fondoTerciario p-1 cursor-pointer flex justify-center min-w-24 hover:bg-colorBase">Madera</span>
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