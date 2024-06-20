import React, { useEffect, useState } from "react";
import { TipoColor, TipoMesa } from "../../../../../tipos/tipos";
import { IconClick } from "@tabler/icons-react";
import ModalColores from "../modalColores";
import {
  useColorSeleccionado,
  useColorSeleccionadoBastidor,
  useModal,
  useModalBastidor,
} from "../../../../../states/states";
import {
  useIndexMesaFinal,
  useMesaFinal,
} from "../../../../../states/statesProductoFinal";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import ObjMesaPacks from "../packConcreto/objDimensionesMesaPack";
import ObjColorBastidor from "./objColorBastidorMesa";
import ObjAlturaMesa from "./objAlturaMesa";
import ModalColoresBastidor from "../productoConcretoBanco/modalColoresBastidor";
import { useTheme } from "next-themes";
import VerEscala from "../verEscala";

export default function SeccionPersonalizarMesa({
  mesaSeleccionada,
  colores,
}: {
  mesaSeleccionada: TipoMesa[];
  colores: TipoColor[];
}) {
  //Estados globales
  const { theme } = useTheme();
  const { modalVisible, setModalVisible } = useModal();
  const { modalVisibleBastidor, setModalVisibleBastidor } = useModalBastidor();
  const { colorElegido, modeloElegido, rutaImagen, grupo } =
    useColorSeleccionado();
  const { colorElegidoBastidor, rutaImagenBastidor } =
    useColorSeleccionadoBastidor();
  const { setMesaFinal } = useMesaFinal();
  const { setIndexMesaFinal } = useIndexMesaFinal();

  //Estados para coger las variables de la mesa
  const [dimensionesMesa, setDimensionesMesa] = useState<string[]>([]);
  const [coloresPataMesa, setColoresPataMesa] = useState<string[]>([]);
  const [alturasMesa, setAlturasMesa] = useState<string[]>([]);
  const [coloresFiltrados, setColoresFiltrados] = useState<TipoColor[]>([]);
  const [coloresExtensible, setColoresExtensible] = useState<TipoColor[]>([]);
  const [grosorTapa, setGrosorTapa] = useState(false);
  const [extensible, setExtensible] = useState(false);

  //Estados para ver el indice de la seleccion del usuario
  const [indexDimension, setIndexDimension] = useState(0);
  const [indexColorPata, setIndexColorPata] = useState(0);
  const [indexAltura, setIndexAltura] = useState(0);

  //Estados que almacenan la eleccion final del usuario
  const [dimension, setDimension] = useState("");
  const [grosorElegido, setGrosorElegido] = useState("");
  const [alturaElegida, setAlturaElegida] = useState("");
  const [colorPataElegido, setColorPataElegido] = useState(coloresPataMesa[0]);

  //Metodos para aplicar visualmente la opcion elegida y setear los estados
  const handleSelectFormato = (index: number, dimension: string) => {
    setIndexDimension(index);
    setDimension(dimension);
  };
  const handleSelectFormatoPata = (index: number, color: string) => {
    setIndexColorPata(index);
    setColorPataElegido(color);
  };
  const handleSelectAltura = (index: number, altura: string) => {
    setIndexAltura(index);
    setAlturaElegida(altura);
  };

  //Para poner el nombre del formato elegido de una manera en concreto
  const ajustarNombre = () => {
    const modelo = modeloElegido.toLowerCase().replace(/ (\w+)$/i, " g1");
    return modelo;
  };
  //Para mostrar las diferentes dimensiones y colores de la mesa
  useEffect(() => {
    if (mesaSeleccionada.length > 0) {
      const dimensionesMesa = mesaSeleccionada[0].dimensiones.split(",");
      const coloresPataMesa = mesaSeleccionada[0].colorPata.split(",");
      const alturasMesa = mesaSeleccionada[0].altura.split(",");
      setColoresPataMesa(coloresPataMesa);
      setDimensionesMesa(dimensionesMesa);
      setAlturasMesa(alturasMesa);
      //Por defecto aplicamos como elegida la primera opcion
      setColorPataElegido(coloresPataMesa[0]);
      setDimension(dimensionesMesa[0]);
      setAlturaElegida(alturasMesa[0]);

      //Verificar si la mes es extensible o no
      if (mesaSeleccionada[0].extension === "extensible") {
        setExtensible(true);
      }
    }
  }, [mesaSeleccionada]);
  //Para filtrar los colores que pertenecen a esta mesa
  useEffect(() => {
    if (mesaSeleccionada.length > 0) {
      const materialesAsiento = mesaSeleccionada
        .map((mesa) => mesa.materialTapa.split(","))
        .flat();

      const modelosFiltrados = colores.filter((color) =>
        materialesAsiento.some((material) =>
          color.modelo.includes(material.trim())
        )
      );
      setColoresFiltrados(modelosFiltrados);
      const laminadosExtensible = colores.filter((color) =>
        color.modelo.includes("laminado")
      );
      setColoresExtensible(laminadosExtensible);
    }
  }, [colores, mesaSeleccionada]);
  //Para comprobar si en ese material existen varios grosores
  useEffect(() => {
    // Iterar sobre cada mesa
    const modelo = ajustarNombre();
    mesaSeleccionada.forEach((mesa) => {
      if (mesa.materialTapa === modelo) {
        if (modelo === "silestone g1") {
          setGrosorElegido("12mm");
        } else if (modelo === "dekton g1") {
          setGrosorElegido("8mm");
        }
        if (mesa.grosorTapa === true) {
          setGrosorTapa(true);
        }
      } else {
        setGrosorTapa(false);
      }
    });
    if (modelo !== "silestone g1" && modelo !== "dekton g1") {
      setGrosorElegido("no hay");
    }
  }, [modeloElegido]);
  //Guarda en los estados globales todos los datos recogidos de los estados locales
  useEffect(() => {
    //Guardamos en el estado global mesa los datos
    setMesaFinal(
      mesaSeleccionada[0].modelo,
      dimension,
      modeloElegido,
      grupo,
      colorElegido,
      grosorElegido,
      colorPataElegido,
      colorElegidoBastidor,
      alturaElegida
    );
    setIndexMesaFinal(
      indexDimension,
      modeloElegido,
      grupo,
      grosorElegido,
      indexAltura
    );
  }, [
    dimension,
    modeloElegido,
    grupo,
    colorElegido,
    grosorElegido,
    colorPataElegido,
    alturaElegida,
    indexDimension,
    colorElegidoBastidor,
    indexAltura,
  ]);

  return (
    <section className="bg-fondoSecundario flex flex-col gap-4 p-8 col-span-2 lg:col-span-1">
      <aside className="text-3xl lg:text-4xl flex items-end gap-4 border-b border-colorBaseSecundario justify-between">
        <span>Encimera</span>
        <VerEscala imagen={"medidasMesa"} />
      </aside>
      {dimensionesMesa.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {dimensionesMesa.map((dimension, index) => (
            <ObjMesaPacks
              key={index}
              datos={{
                dimension: dimension,
                selected: indexDimension === index,
                onSelect: () => handleSelectFormato(index, dimension),
              }}
            />
          ))}
        </div>
      )}
      <div className="flex gap-2 flex-wrap justify-around"></div>
      <section className="flex items-center gap-2">
        <h2 className="text-2xl">Acabado de la encimera</h2>
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
      {/* Elegir color del laminado, en el caso de que la mesa sea extensible */}
      {extensible && (
        <aside>
          <section className="flex items-center gap-2">
            <h2 className="text-2xl">Elige color del laminado extensible</h2>
            <span
              className="flex bg-fondoTerciario p-2 cursor-pointer hover:bg-colorBase"
              onClick={() => {
                setModalVisibleBastidor(true);
              }}
            >
              Elegir <IconClick stroke={2} />
            </span>
            {modalVisibleBastidor && (
              <ModalColoresBastidor colores={coloresExtensible} />
            )}
          </section>
          <div
            className={cn(
              colorElegidoBastidor === ""
                ? "hidden"
                : "flex gap-5 whitespace-nowrap items-center flex-wrap mt-3"
            )}
          >
            <h2 className="text-xl">
              Color:{" "}
              <span
                className={theme === "light" ? "text-white" : "text-colorBase"}
              >
                {colorElegidoBastidor}
              </span>
            </h2>
            <div>
              <Image
                src={rutaImagenBastidor}
                alt={`Color del laminado extensible`}
                width={50}
                height={50}
              />
            </div>
          </div>
        </aside>
      )}

      {/* Ver los diferentes grosores del material, en el caso de que se pueda */}
      {grosorTapa && (
        <section className="flex items-center">
          <h2 className="text-2xl mr-4">Grosor:</h2>
          {ajustarNombre() === "silestone g1" && (
            <aside className="flex text-xl gap-2">
              <div
                className={`cursor-pointer p-2 ${
                  grosorElegido === "12mm"
                    ? "bg-colorBase"
                    : "bg-fondoTerciario"
                }`}
                onClick={() => setGrosorElegido("12mm")}
              >
                12mm
              </div>
              <div
                className={`cursor-pointer p-2 ${
                  grosorElegido === "20mm"
                    ? "bg-colorBase"
                    : "bg-fondoTerciario"
                }`}
                onClick={() => setGrosorElegido("20mm")}
              >
                20mm
              </div>
            </aside>
          )}
          {ajustarNombre() === "dekton g1" && (
            <aside className="flex text-xl gap-2">
              <div
                className={`cursor-pointer p-2 ${
                  grosorElegido === "8mm" ? "bg-colorBase" : "bg-fondoTerciario"
                }`}
                onClick={() => setGrosorElegido("8mm")}
              >
                8mm
              </div>
              <div
                className={`cursor-pointer p-2 ${
                  grosorElegido === "12mm"
                    ? "bg-colorBase"
                    : "bg-fondoTerciario"
                }`}
                onClick={() => setGrosorElegido("12mm")}
              >
                12mm
              </div>
            </aside>
          )}
        </section>
      )}
      <aside className="text-4xl flex items-end gap-4 border-b border-colorBaseSecundario">
        Patas
      </aside>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl mr-4">
          Patas de {mesaSeleccionada[0].materialPata}
        </h2>
        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-2xl mr-[6px]">Color</span>
          {coloresPataMesa.map((color, index) => (
            <ObjColorBastidor
              key={index}
              datos={{
                color: color,
                selected: indexColorPata === index,
                onSelect: () => handleSelectFormatoPata(index, color),
              }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <h2 className="text-2xl">Altura</h2>

          {alturasMesa.map((altura, index) => (
            <ObjAlturaMesa
              key={index}
              datos={{
                altura: altura,
                selected: indexAltura === index,
                onSelect: () => handleSelectAltura(index, altura),
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
