import { useEffect, useState } from "react";
import { TipoColor, TipoSilla } from "../../../../../tipos/tipos";
import ObjFormatoSilla from "./objFormatoSilla";
import { IconClick } from "@tabler/icons-react";
import ModalColores from "../modalColores";

export default function SeccionPersonalizarSilla({
  sillaSeleccionada, colores
}: {
  sillaSeleccionada: TipoSilla[],
  colores: TipoColor[]
}) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [formato, setFormato] = useState("");

  const handleSelectItem = (index: number, formato: string) => {
    setSelectedItem(index);
    setFormato(formato);
  };
  useEffect(() => {
    setFormato(sillaSeleccionada[0].formato);
  }, []);
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
        <span className="flex bg-fondoTerciario p-2 cursor-pointer hover:bg-colorBase">
          Elegir <IconClick stroke={2} />
        </span>
        <ModalColores colores={colores}/>
      </section>
      <h2 className="text-2xl">Seleccionado:</h2>
    </section>
  );
}
