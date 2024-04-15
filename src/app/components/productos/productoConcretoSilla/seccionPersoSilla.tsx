import React, { useEffect, useState } from "react";
import { TipoColor, TipoSilla } from "../../../../../tipos/tipos";
import ObjFormatoSilla from "./objFormatoSilla";
import { IconClick } from "@tabler/icons-react";
import ModalColores from "../modalColores";
import {
  useColorSeleccionado,
  useModal,
  usePrecioAcumulado,
} from "../../../../../states/states";
import { cn } from "@nextui-org/react";
import ColorEstructuraSilla from "./colorEstructuraSilla";
import SeccionPrecioSilla from "./seccionPrecioSilla";

export default function SeccionPersonalizarSilla({
  sillaSeleccionada,
  colores,
}: {
  sillaSeleccionada: TipoSilla[];
  colores: TipoColor[];
}) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [indexPrecio, setIndexPrecio] = useState(0);
  const [indexMaterialColor, setIndexMaterialColor] = useState(0);
  const { precioAcumulado, setPrecioAcumulado } = usePrecioAcumulado();
  const [formato, setFormato] = useState("");
  const [colorB, setColorB] = useState("");
  const [coloresBastidor, setColoresBastidor] = useState<string[]>([]);
  const [coloresFiltrados, setColoresFiltrados] = useState<TipoColor[]>([]);

  const { modalVisible, setModalVisible } = useModal();
  const { colorElegido, modeloElegido } = useColorSeleccionado();

  const handleSelectFormato = (index: number, formato: string) => {
    setSelectedItem(index);
    setFormato(formato);
    setIndexPrecio(index);
  };

  const handleSelectColorBastidor = (index: number, color: string) => {
    setSelectedColor(index);
    setColorB(color);
  };

  //Filtra los colores para q solo aparezcan los del material disponible
  useEffect(() => {
    if (sillaSeleccionada.length > 0) {
      const materialesAsiento = sillaSeleccionada
        .map((silla) => silla.materialAsiento.split(","))
        .flat();
      console.log(materialesAsiento);

      const modelosFiltrados = colores.filter((color) =>
        materialesAsiento.some((material) =>
          color.modelo.includes(material.trim())
        )
      );
      console.log(modelosFiltrados);
      setColoresFiltrados(modelosFiltrados);
    }
  }, [colores, sillaSeleccionada]);

  //Para mostrar los posibles colores del bastidor de la silla
  useEffect(() => {
    if (sillaSeleccionada.length > 0) {
      setFormato(sillaSeleccionada[0].formato);
      const colorBastidor = sillaSeleccionada[0].colorBastidor.split(",");
      setColoresBastidor(colorBastidor);
    }
  }, [sillaSeleccionada]);

  //Para coger el precio en funcion del formato y color seleccionados
  useEffect(() => {
    if (sillaSeleccionada.length > 0) {
      const precio = parseFloat(
        sillaSeleccionada[indexPrecio].precio.split(",")[indexMaterialColor]
      );
      setPrecioAcumulado(precio);
    }
  }, [indexMaterialColor, indexPrecio, setPrecioAcumulado, sillaSeleccionada]);

  useEffect(() => {
    if (modeloElegido == "Tapizado normal") {
      setIndexMaterialColor(0);
    } else if (modeloElegido == "Tapizado premium") {
      setIndexMaterialColor(1);
    } else if (modeloElegido == "Laminado") {
      setIndexMaterialColor(2);
    } else if (modeloElegido == "Laca") {
      setIndexMaterialColor(3);
    } else if (modeloElegido == "Barniz") {
      setIndexMaterialColor(4);
    }
  }, [modeloElegido]);

  return (
    <>
      <section className="bg-fondoSecundario flex flex-col gap-4 p-8">
        <aside className="text-4xl flex items-end gap-4">
          Formato: <span className="text-2xl">{formato}</span>
        </aside>
        <div className="flex gap-2 flex-wrap justify-around">
          {sillaSeleccionada.map((silla, index) => (
            <ObjFormatoSilla
              key={index}
              datos={{
                formato: silla.formato,
                selected: selectedItem === index,
                onSelect: (formato: string) =>
                  handleSelectFormato(index, formato),
              }}
            />
          ))}
        </div>
        <section className="flex items-center gap-2">
          <h2 className="text-2xl">Elige color y textura</h2>
          <span
            className="flex bg-fondoTerciario p-2 cursor-pointer hover:bg-colorBase"
            onClick={() => {
              setModalVisible(true);
            }}
          >
            Elegir <IconClick stroke={2} />
          </span>
          {modalVisible && <ModalColores colores={coloresFiltrados} />}
        </section>
        <div
          className={cn(
            colorElegido === "" ? "hidden" : "flex gap-10 whitespace-nowrap"
          )}
        >
          <h2 className="text-xl">
            Acabado: <span className="text-colorBase">{modeloElegido}</span>
          </h2>
          <h2 className="text-xl">
            Color: <span className="text-colorBase">{colorElegido}</span>
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl mr-4">Color del bastidor</h2>
          {coloresBastidor.map((color, index) => (
            <ColorEstructuraSilla
              key={index}
              datos={{
                color: color,
                selected: selectedColor === index,
                onSelect: (color: string) =>
                  handleSelectColorBastidor(index, color),
              }}
            />
          ))}
        </div>
      </section>
      <SeccionPrecioSilla indexPrecio={indexPrecio} />
    </>
  );
}
