import { useEffect, useState } from "react";
import { TipoColor, TipoPack } from "../../../../../tipos/tipos";
import ObjMesaPacks from "./objDimensionesMesaPack";
import { useColorSeleccionado, useModal } from "../../../../../states/states";
import { IconClick } from "@tabler/icons-react";
import ModalColores from "../modalColores";
import { cn } from "@nextui-org/react";

export default function SeccionMesaPack({
  packSeleccionado,
  colores,
}: {
  packSeleccionado: TipoPack[];
  colores: TipoColor[];
}) {
  const [dimensionesMesa, setDimensionesMesa] = useState<string[]>([]);

  //Estados para almacenar las dimensiones de la mesas elegidas
  const [dimensionElegida, setDimensionElegida] = useState(0);
  const [dimension, setDimension] = useState("");
  const [indexPrecio, setIndexPrecio] = useState(0);

  const handleSelectFormato = (index: number, dimension: string) => {
    setDimensionElegida(index);
    setDimension(dimension);
    setIndexPrecio(index);
  };

  //Para manejar el modal de los colores
  const { modalVisible, setModalVisible } = useModal();
  const { colorElegido, modeloElegido } = useColorSeleccionado();

  useEffect(() => {
    if (packSeleccionado.length > 0) {
      const dimensionesMesa = packSeleccionado[0].dimensiones.split(",");
      setDimensionesMesa(dimensionesMesa);
    }
  }, [packSeleccionado]);

  //Para ver si tiene cajon o no
  const [cajon, setCajon] = useState(false);
  const [mesaConCajon, setMesaConCajon] = useState(0);

  //Para guardar si ha seleecionado el cajon
  const [cajonSeleccionado, setCajonSeleccionado] = useState(false);

  useEffect(() => {
    if (packSeleccionado.length > 0) {
      // Recorrer todo el objeto packSeleccionado
      const hayPrecioCajon = packSeleccionado.findIndex((pack) => {
        // Verificar si el acabado es igual al modeloElegido y el precioCajon es mayor que 0
        return (
          pack.materialTapa === modeloElegido.toLowerCase() &&
          pack.precioCajon !== 0
        );
      });

      setCajon(hayPrecioCajon !== -1);
      setMesaConCajon(hayPrecioCajon);
    }
  }, [modeloElegido, cajon, packSeleccionado]);

  return (
    <section className="bg-fondoSecundario col-span-3 p-8 flex flex-col gap-4">
      <h1 className="text-4xl">Dimensiones</h1>
      <div className="flex gap-5">
        {dimensionesMesa.map((dimension, index) => (
          <ObjMesaPacks
            key={index}
            datos={{
              dimension: dimension,
              selected: dimensionElegida === index,
              onSelect: () => handleSelectFormato(index, dimension),
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
        {modalVisible && <ModalColores colores={colores} />}
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
      {/* Solo se muestra si la mesa tiene la posibilidad de cajon */}
      {cajon && (
        <div className="text-2xl">
          Añadir cajon: {packSeleccionado[mesaConCajon].precioCajon}€
          <input
            type="checkbox"
            checked={cajonSeleccionado}
            onChange={(e) => setCajonSeleccionado(e.target.checked)}
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
          />
        </div>
      )}
    </section>
  );
}
