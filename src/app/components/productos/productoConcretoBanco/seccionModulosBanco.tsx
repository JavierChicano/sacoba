"use client";
import { useEffect, useState } from "react";
import { TipoBanco, TipoColor } from "../../../../../tipos/tipos";
import { IconClick } from "@tabler/icons-react";
import ModuloEspecifico from "./moduloEspecifico";
import {
  useColorSeleccionado,
  useColorSeleccionadoBastidor,
  useModal,
  useModalBastidor,
} from "../../../../../states/states";
import { cn } from "@nextui-org/react";
import ModalColores from "../modalColores";
import ModalColoresBastidor from "./modalColoresBastidor";
import Image from "next/image";

export default function SeccionModulosBanco({
  bancosPosibles,
  coloresTapizado,
  coloresBastidor,
}: {
  bancosPosibles: TipoBanco[];
  coloresTapizado: TipoColor[];
  coloresBastidor: TipoColor[];
}) {
  //Para mostrar y guardar el color seleccionado
  const { colorElegido, modeloElegido, rutaImagen } = useColorSeleccionado();
  const { colorElegidoBastidor, modeloElegidoBastidor, rutaImagenBastidor } =
    useColorSeleccionadoBastidor();
  const { modalVisible, setModalVisible } = useModal();
  const { modalVisibleBastidor, setModalVisibleBastidor } = useModalBastidor();
  const [zocalo, setZocalo] = useState(false);

  function dividirNumeros(cadena: string): number[] {
    return cadena.split(",").map((numero: string) => parseFloat(numero.trim()));
  }
  // Mapeo del array bancosPosibles con los precios separados
  const bancosPrecios = bancosPosibles.map((banco) => ({
    ...banco,
    preciosSeparados: dividirNumeros(banco.precio),
  }));

  //Para mostrar un precio u otro en funcion del tapizado
  const indiceObjeto = modeloElegido === "Tapizado normal" ? 0 : 1;

  useEffect(() => {
    if (bancosPosibles[0].zocalo) {
      setZocalo(true);
    }
  }, []);

  return (
    <section className="bg-fondoSecundario flex flex-col gap-4 p-8 row-span-6">
      <div className="flex justify-between h-14">
        <h1 className="text-4xl w-32 self-center">Módulos</h1>
      </div>
      <div className="flex flex-col gap-4">
        <section className="flex items-center gap-2">
          <h2 className="text-2xl">Elige color y textura del tapizado</h2>
          <span
            className="flex bg-fondoTerciario p-2 cursor-pointer hover:bg-colorBase"
            onClick={() => {
              setModalVisible(true);
            }}
          >
            Elegir <IconClick stroke={2} />
          </span>
          {modalVisible && <ModalColores colores={coloresTapizado} />}
        </section>
        <div
          className={cn(
            colorElegido === ""
              ? "hidden"
              : "flex gap-5 whitespace-nowrap items-center flex-wrap"
          )}
        >
          <h2 className="text-xl">
            Acabado: <span className="text-colorBase">{modeloElegido}</span>
          </h2>
          <h2 className="text-xl">
            Color: <span className="text-colorBase">{colorElegido}</span>
          </h2>
          <div>
            <Image
              src={rutaImagen}
              alt={`Color ${modeloElegido}`}
              width={50}
              height={50}
            />
          </div>
        </div>
        <section>
          <section className="flex items-center gap-2">
            <h2 className="text-2xl">Elige color y acabado del bastidor</h2>
            <span
              className="flex bg-fondoTerciario p-2 cursor-pointer hover:bg-colorBase"
              onClick={() => {
                setModalVisibleBastidor(true);
              }}
            >
              Elegir <IconClick stroke={2} />
            </span>
            {modalVisibleBastidor && (
              <ModalColoresBastidor colores={coloresBastidor} />
            )}
          </section>
          <div
            className={cn(
              colorElegidoBastidor === ""
                ? "hidden"
                : "flex gap-5 whitespace-nowrap items-center flex-wrap mt-4"
            )}
          >
            <h2 className="text-xl">
              Acabado:{" "}
              <span className="text-colorBase">{modeloElegidoBastidor}</span>
            </h2>
            <h2 className="text-xl">
              Color:{" "}
              <span className="text-colorBase">{colorElegidoBastidor}</span>
            </h2>
            <div>
              <Image
                src={rutaImagenBastidor}
                alt={`Color ${modeloElegidoBastidor}`}
                width={50}
                height={50}
              />
            </div>
          </div>
          {zocalo && (
            <label className="flex items-center text-2xl gap-4 mt-4">
              ¿Desea que el banco tenga zócalo?
              <input
                type="checkbox"
                style={{ width: "20px", height: "20px", marginLeft: "5px" }}
              />
            </label>
          )}
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
