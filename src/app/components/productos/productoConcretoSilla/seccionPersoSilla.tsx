import React, { useEffect, useState } from "react";
import { TipoColor, TipoSilla } from "../../../../../tipos/tipos";
import ObjFormatoSilla from "./objFormatoSilla";
import { IconClick } from "@tabler/icons-react";
import ModalColores from "../modalColores";
import { useColorSeleccionado, useModal } from "../../../../../states/states";
import { cn } from "@nextui-org/react";

export default function SeccionPersonalizarSilla({
  sillaSeleccionada,
  colores,
}: {
  sillaSeleccionada: TipoSilla[];
  colores: TipoColor[];
}) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [formato, setFormato] = useState("");
  const { modalVisible, setModalVisible } = useModal();
  const { colorElegido, modeloElegido, setColorSeleccionado } =
    useColorSeleccionado();

  const handleSelectItem = (index: number, formato: string) => {
    setSelectedItem(index);
    setFormato(formato);
  };

  useEffect(() => {
    if (sillaSeleccionada.length > 0) {
      setFormato(sillaSeleccionada[0].formato);
    }
  }, [sillaSeleccionada]);

  return (
    <section className="bg-fondoSecundario flex flex-col gap-4 p-8">
      <aside className="text-4xl flex items-end gap-4">
        Formato: <span className="text-2xl">{formato}</span>
      </aside>
      <div className="flex gap-2 flex-wrap justify-around">
        {sillaSeleccionada.map((silla, index) => (
          <ObjFormatoSilla
            key={index}
            formato={silla.formato}
            index={index}
            selected={selectedItem === index}
            onSelect={(formato) => handleSelectItem(index, formato)}
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
        {modalVisible && <ModalColores colores={colores} />}
      </section>
      <div className={cn(colorElegido === "" ? "hidden" : "block")}>
        <h2 className="text-xl">
          Acabado: <span className="text-colorBase">{modeloElegido}</span>
        </h2>
        <h2 className="text-xl">
          Color: <span className="text-colorBase">{colorElegido}</span>
        </h2>
      </div>
    </section>
  );
}
