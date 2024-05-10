import Image from "next/image";
import { useEffect, useState } from "react";
import {
  useColorSeleccionadoBastidor,
  useModalBastidor,
} from "../../../../../states/states";
import { TipoColor } from "../../../../../tipos/tipos";
import AcabadoLaminado from "../asideAcabadoLaminado";

export default function UnidadColorBastidor({ color }: { color: TipoColor }) {
  const [hovered, setHovered] = useState(false);
  const [rutaIMG, setRutaIMG] = useState("");
  const [acabadoSelec, setAcabadoSelec] = useState("");
  const [acabadosDisponibles, setAcabadosDisponibles] = useState<string[]>([]);
  const { setModalVisibleBastidor } = useModalBastidor();
  const { setColorSeleccionadoBastidor } = useColorSeleccionadoBastidor();

  const mayuscula = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const cambiarNombresModelo = (modelo: string) => {
    if (modelo === "tapizado nvC") {
      return "Tapizado normal";
    } else if (modelo === "tapizado nvA") {
      return "Tapizado premium";
    }
    return modelo;
  };
  const handleClickAcabado = (acabado: string) => {
    setAcabadoSelec(acabado);
  };

  const handleHoverAcabado = (acabado: string) => {
    setAcabadoSelec(acabado);
  };

  //Cuando se hace click finalmente en el color
  const handleClick = () => {
    if (color.modelo === "laminado") {
      if (acabadoSelec) {
        setColorSeleccionadoBastidor(
          color.nombreColor + " " + acabadoSelec,
          mayuscula(cambiarNombresModelo(color.modelo)),
          rutaIMG
        );
      } else {
        setColorSeleccionadoBastidor(
          color.nombreColor + " " + acabadosDisponibles[0],
          mayuscula(cambiarNombresModelo(color.modelo)),
          rutaIMG
        );
        console.log(acabadosDisponibles[0]);
      }
    } else {
      setColorSeleccionadoBastidor(
        color.nombreColor,
        mayuscula(cambiarNombresModelo(color.modelo)),
        rutaIMG
      );
    }

    //Salirse del modal
    setModalVisibleBastidor(false);
  };

  useEffect(() => {
    if (color.grupo) {
      setRutaIMG(
        `/colores/${color.modelo}/${color.grupo}/${color.imagenColor}`
      );
    } else {
      setRutaIMG(`/colores/${color.modelo}/${color.imagenColor}`);
    }

    //Ver acabados disponibles de los laminados
    if (color.acabado) {
      const acabados = color.acabado.split(",");
      setAcabadosDisponibles(acabados);
    }
  }, []);
  return (
    <li
      className={
        color.modelo === "laminado"
          ? "rounded-lg w-40 relative"
          : "rounded-lg w-36 relative"
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex flex-col justify-center items-center pointer-events-none z-10  flex-wrap">
          <p className="text-white text-xl text-center text-wrap">
            {color.nombreColor}
          </p>
          {acabadoSelec && <p>{acabadoSelec}</p>}
        </div>
      )}
      <div className="cursor-pointer" onClick={handleClick}>
        <Image
          src={
            color.grupo
              ? `/colores/${color.modelo}/${color.grupo}/${color.imagenColor}`
              : `/colores/${color.modelo}/${color.imagenColor}`
          }
          alt={`Color ${color.nombreColor}`}
          width={200}
          height={200}
        />
        {acabadosDisponibles && (
          <aside className="z-10 absolute top-0 flex w-full">
            {acabadosDisponibles.map((acabado, acabadoIndex) => (
              <AcabadoLaminado
                acabado={acabado}
                key={acabadoIndex}
                onClick={handleClickAcabado}
                onHover={handleHoverAcabado}
              />
            ))}
          </aside>
        )}
      </div>
    </li>
  );
}
