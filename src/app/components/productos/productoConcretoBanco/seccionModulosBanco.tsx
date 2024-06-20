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
import VerEscala from "../verEscala";

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
  const [zocaloSeleccionado, setZocaloSeleccionado] = useState(false);

  useEffect(() => {
    setBancoFinal(
      bancosPosibles[0].modelo,
      modeloElegido,
      colorElegido,
      modeloElegidoBastidor,
      colorElegidoBastidor,
      zocaloSeleccionado
    );
  }, [
    modeloElegido,
    colorElegido,
    modeloElegidoBastidor,
    colorElegidoBastidor,
    zocaloSeleccionado,
  ]);

  useEffect(() => {
    if (colorElegido.length > 0) {
      setColorSeleccionado("", "", "");
    }
    if (colorElegidoBastidor.length > 0) {
      setColorSeleccionadoBastidor("", "", "");
    }
    if(bancosPosibles[0].zocalo){
      setZocalo(true)
    }else{
      setZocalo(false)
    }
  }, []);

  return (
    <section className="bg-fondoSecundario flex flex-col gap-4 p-8 row-span-6 col-span-2 lg:col-span-1">
      <div className="flex border-b border-colorBaseSecundario w-full justify-between h-14 items-end">
        <h1 className="text-3xl lg:text-4xl">
        <span>Acabados</span>
        </h1>
        <VerEscala imagen={"medidasBanco"}/>
      </div>
      <div className="flex flex-col gap-4">
        <section className="flex items-center gap-2 justify-between md:justify-start">
          <h2 className="text-lg md:text-2xl">Color y textura del tapizado</h2>
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
            <h2 className="text-lg md:text-2xl">Color y acabado del bastidor</h2>
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
            <label className="flex items-center text-lg md:text-2xl gap-4 mt-4">
              ¿Desea que el banco tenga zócalo?
              <input
                type="checkbox"
                style={{ width: "20px", height: "20px", marginLeft: "5px" }}
                onChange={() => {
                  setZocaloSeleccionado(true);
                }}
              />
            </label>
          )}
        </section>
        <section>
          <h1 className="text-3xl lg:text-4xl self-center border-b border-colorBaseSecundario w-full mb-2">
            Módulos
          </h1>

          <div className="grid lg:grid-cols-2">
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
