import { useEffect, useState } from "react";
import { TipoColor, TipoPack } from "../../../../../tipos/tipos";
import ObjMesaPacks from "./objDimensionesMesaPack";
import {
  useColorSeleccionado,
  useModal,
  usePrecioAcumulado,
} from "../../../../../states/states";
import { IconClick } from "@tabler/icons-react";
import ModalColores from "../modalColores";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import { usePackFinal } from "../../../../../states/statesProductoFinal";
import { useTheme } from "next-themes";

export default function SeccionMesaPack({
  packSeleccionado,
  colores,
}: {
  packSeleccionado: TipoPack[];
  colores: TipoColor[];
}) {
  //Estados globales
  const { theme } = useTheme();
  const { precioAcumulado, setPrecioAcumulado } = usePrecioAcumulado();

  //Para manejar el modal de los colores
  const { modalVisible, setModalVisible } = useModal();
  const { colorElegido, modeloElegido, rutaImagen } = useColorSeleccionado();
  const { setMesaPack } = usePackFinal();

  const [dimensionesMesa, setDimensionesMesa] = useState<string[]>([]);
  const [preciosMesa, setPreciosMesa] = useState<number[]>([]);

  //Estados para almacenar las dimensiones de la mesas elegidas
  const [dimensionElegida, setDimensionElegida] = useState(0);
  const [bastidorElegido, setBastidorElegido] = useState("Blanco");
  const [dimension, setDimension] = useState("");
  const [indexPrecio, setIndexPrecio] = useState(0);

  const handleSelectFormato = (index: number, dimension: string) => {
    setDimensionElegida(index);
    setDimension(dimension);
    setIndexPrecio(index);
  };

  useEffect(() => {
    if (packSeleccionado.length > 0) {
      const dimensionesMesa = packSeleccionado[0].dimensiones.split(",");
      setDimensionesMesa(dimensionesMesa);
      setDimension(dimensionesMesa[0]);
    }
  }, [packSeleccionado]);

  useEffect(() => {
    const preciosEncontrados: number[] = [];
    // Recorrer el array packSeleccionado
    packSeleccionado.forEach((pack) => {
      // Verificar si el material de la tapa coincide con modeloElegido
      if (pack.materialTapa.toLowerCase() === modeloElegido.toLowerCase()) {
        // Acceder al parámetro precio del objeto pack
        const precioString = pack.precio;
        // Dividir el precio en un array usando la coma como delimitador
        const precios = precioString
          .split(",")
          .map((precio) => parseFloat(precio.trim()));
        // Agregar los precios encontrados al array preciosEncontrados
        preciosEncontrados.push(...precios);
      }
    });

    // Actualizar el estado preciosMesa con los precios encontrados
    setPreciosMesa(preciosEncontrados);
  }, [modeloElegido]);

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
          pack.materialTapa.toLowerCase() === modeloElegido.toLowerCase() &&
          pack.precioCajon !== 0
        );
      });

      setCajon(hayPrecioCajon !== -1);
      setMesaConCajon(hayPrecioCajon);
    }
  }, [modeloElegido, cajon, packSeleccionado]);

  useEffect(() => {
    if (cajonSeleccionado) {
      setPrecioAcumulado(
        preciosMesa[indexPrecio] + packSeleccionado[mesaConCajon].precioCajon
      );
    } else {
      setPrecioAcumulado(preciosMesa[indexPrecio]);
    }
  }, [preciosMesa, indexPrecio, cajonSeleccionado]);

  //Seteo de la seleccion final de la mesa del pack
  useEffect(() => {
    setMesaPack(
      packSeleccionado[0].modelo,
      dimension,
      modeloElegido,
      colorElegido,
      cajonSeleccionado,
      bastidorElegido,
      precioAcumulado
    );
  }, [
    dimension,
    modeloElegido,
    colorElegido,
    cajonSeleccionado,
    bastidorElegido,
    precioAcumulado,
  ]);

  return (
    <section className="bg-fondoSecundario lg:col-span-3 p-2 lg:p-8 flex flex-col gap-4">
      <h1 className="text-3xl lg:text-4xl">Dimensiones</h1>
      <div className="flex gap-5 lg:flex-row flex-wrap">
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
          colorElegido === ""
            ? "hidden"
            : "flex gap-5 whitespace-nowrap items-center flex-wrap"
        )}
      >
        <h2 className="text-xl">
          Acabado:{" "}
          <span className={theme === "light" ? "text-white" : "text-colorBase"}>
            {modeloElegido}
          </span>
        </h2>
        <h2 className="text-xl">
          Color:{" "}
          <span className={theme === "light" ? "text-white" : "text-colorBase"}>
            {colorElegido}
          </span>
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
      <section className="flex items-center gap-8">
        <h2 className="text-2xl">Color Bastidor</h2>
        <aside className="flex items-center text-xl gap-2 flex-grow">
          <div
            className={`cursor-pointer p-2 ${
              bastidorElegido === "Blanco"
                ? "bg-colorBase"
                : "bg-fondoTerciario"
            }`}
            onClick={() => setBastidorElegido("Blanco")}
          >
            Blanco
          </div>
          <div
            className={`cursor-pointer p-2 ${
              bastidorElegido === "Aluminio"
                ? "bg-colorBase"
                : "bg-fondoTerciario"
            }`}
            onClick={() => setBastidorElegido("Aluminio")}
          >
            Aluminio
          </div>
        </aside>
      </section>
      <section className="flex h-full items-end">
        {precioAcumulado && (
          <h1 className="text-2xl lg:text-3xl">
            Precio de la mesa: {precioAcumulado}€
          </h1>
        )}
      </section>
    </section>
  );
}
