"use client";
import { useEffect, useState } from "react";
import { TipoBanco, TipoColor } from "../../../../../tipos/tipos";
import { IconClick } from "@tabler/icons-react";
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
import { useBancoFinal } from "../../../../../states/statesProductoFinal";
import ObjModuloBanco from "./objModuloBanco";
import { useTheme } from "next-themes";

export default function SeccionModulosBanco({
  bancosPosibles,
  coloresTapizado,
  coloresBastidor,
}: {
  bancosPosibles: TipoBanco[];
  coloresTapizado: TipoColor[];
  coloresBastidor: TipoColor[];
}) {
  //Para mostrar y guardar el color seleccionado, estados globales
  const { theme } = useTheme();
  const { colorElegido, modeloElegido, rutaImagen, setColorSeleccionado } =
    useColorSeleccionado();
  const {
    colorElegidoBastidor,
    modeloElegidoBastidor,
    rutaImagenBastidor,
    setColorSeleccionadoBastidor,
  } = useColorSeleccionadoBastidor();
  const { modalVisible, setModalVisible } = useModal();
  const { modalVisibleBastidor, setModalVisibleBastidor } = useModalBastidor();
  const { banco, setBancoFinal } = useBancoFinal();

  //Estado que guarda si ha elegido zocalo o no
  const [zocalo, setZocalo] = useState(false);

  useEffect(() => {
    setBancoFinal(
      bancosPosibles[0].modelo,
      modeloElegido,
      colorElegido,
      modeloElegidoBastidor,
      colorElegidoBastidor,
      zocalo
    );
  }, [
    modeloElegido,
    colorElegido,
    modeloElegidoBastidor,
    colorElegidoBastidor,
    zocalo,
  ]);

  useEffect(() => {
    if (colorElegido.length > 0) {
      setColorSeleccionado("", "", "");
    }
    if (colorElegidoBastidor.length > 0) {
      setColorSeleccionadoBastidor("", "", "");
    }
  }, []);

  return (
    <section className="bg-fondoSecundario flex flex-col gap-4 p-8 row-span-6">
      <div className="flex justify-between h-14">
        <h1 className="text-4xl self-center border-b border-colorBaseSecundario w-full">
          Acabados
        </h1>
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
            Acabado: <span className={theme==="light"? "text-white" : "text-colorBase"}>{modeloElegido}</span>
          </h2>
          <h2 className="text-xl">
            Color: <span className={theme==="light"? "text-white" : "text-colorBase"}>{colorElegido}</span>
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
              <span className={theme==="light"? "text-white" : "text-colorBase"}>{modeloElegidoBastidor}</span>
            </h2>
            <h2 className="text-xl">
              Color:{" "}
              <span className={theme==="light"? "text-white" : "text-colorBase"}>{colorElegidoBastidor}</span>
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
                onChange={() => {
                  setZocalo(true);
                }}
              />
            </label>
          )}
        </section>
        <section>
          <h1 className="text-4xl self-center border-b border-colorBaseSecundario w-full mb-2">
            Módulos
          </h1>

          <div className="grid grid-cols-2">
            {bancosPosibles.map((banco, index) => (
              <ObjModuloBanco
                key={index}
                modulo={banco}
                tapizado={modeloElegido}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
