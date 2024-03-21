"use client";
import { useState } from "react";
import { TipoBanco } from "../../../../../tipos/tipos";
import { IconClick } from "@tabler/icons-react";
import ModuloEspecifico from "./moduloEspecifico";

export default function SeccionModulosBanco({
  bancosPosibles,
}: {
  bancosPosibles: TipoBanco[];
}) {
  const [tapizadoSeleccionado, setTipoTapizado] = useState<string>("normal");

  function dividirNumeros(cadena: string): number[] {
    return cadena.split(",").map((numero: string) => parseFloat(numero.trim()));
  }
  // Mapeo del array bancosPosibles con los precios separados
  const bancosPrecios = bancosPosibles.map((banco) => ({
    ...banco,
    preciosSeparados: dividirNumeros(banco.precio),
  }));
  const indiceObjeto = tapizadoSeleccionado === "normal" ? 0 : 1;

  return (
    <section className="bg-fondoSecundario flex flex-col gap-4 p-8 row-span-5">
      <div className="flex justify-between h-14">
        <h1 className="text-4xl w-32 self-center">Módulos</h1>
        <div>
          <ul className="flex text-lg bg-white text-black rounded-lg">
            <li className="py-4 px-2 border-r-[1px] border-colorBase">
              Tapizado:
            </li>
            <li
              className={`py-4 px-2 cursor-pointer hover:bg-colorBase ${
                tapizadoSeleccionado === "normal" ? "bg-colorBase" : ""
              }`}
              onClick={() => setTipoTapizado("normal")}
            >
              Normal
            </li>
            <li
              className={`py-4 px-2 cursor-pointer hover:bg-colorBase rounded-r-lg ${
                tapizadoSeleccionado === "premium" ? "bg-colorBase" : ""
              }`}
              onClick={() => setTipoTapizado("premium")}
            >
              Premium
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <section>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl">Color del tapizado </h2>
            <span className="flex bg-fondoTerciario p-2 cursor-pointer">
              Cambiar <IconClick stroke={2} />
            </span>
          </div>
          <div className="flex text-xl my-2 gap-8 items-center">
            <span>
              -Tapizado{" "}
              <span className="text-colorBase">{tapizadoSeleccionado}</span>
            </span>
            <span>-Color </span>
          </div>
        </section>
        <section>
          <h2 className="text-2xl">Cantidad </h2>
          <div className="grid grid-cols-2">
          {bancosPrecios.map((banco, index) => (
              <ModuloEspecifico
                key={index}
                datos={{
                  id: banco.id,
                  dimensiones: banco.modulo,
                  respaldo: banco.respaldo,
                  precioRespaldo: banco.precioRespaldo,
                  precio: banco.preciosSeparados[indiceObjeto],
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
