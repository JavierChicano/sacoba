import Image from "next/image";
import { TipoColor } from "../../../../tipos/tipos";
import { useEffect, useState } from "react";
import { useColorSeleccionado, useModal } from "../../../../states/states";
import AcabadoLaminado from "./asideAcabadoLaminado";

export default function UnidadColor({ color }: { color: TipoColor }) {
  const [hovered, setHovered] = useState(false);
  const [rutaIMG, setRutaIMG] = useState("");
  const [acabadoSelec, setAcabadoSelec] = useState("");
  const [acabadosDisponibles, setAcabadosDisponibles] = useState<string[]>([]);
  const [nombreModelo, setNombreModelo] = useState("");
  const { setModalVisible } = useModal();
  const { setColorSeleccionado, setGrupo } = useColorSeleccionado();

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
        setColorSeleccionado(
          color.nombreColor + " " + acabadoSelec,
          mayuscula(cambiarNombresModelo(nombreModelo)),
          rutaIMG
        );
      } else {
        setColorSeleccionado(
          color.nombreColor + " " + acabadosDisponibles[0],
          mayuscula(cambiarNombresModelo(nombreModelo)),
          rutaIMG
        );
      }
    }else{
      setColorSeleccionado( color.nombreColor, mayuscula(cambiarNombresModelo(nombreModelo)), rutaIMG);
      //Seteamos el grupo solo si existe
      {color.grupo ? setGrupo(color.grupo) : setGrupo("no hay");}
    }

    //Salirse del modal
    setModalVisible(false);
  };

  useEffect(() => {
    if (color.grupo) {
      const nombre = color.modelo.replace(/ g1/i, "");
      setRutaIMG(
        `/colores/${nombre}/${color.grupo}/${color.imagenColor}`
      );
      const nombreCompleto = nombre + " " + color.grupo;
      setNombreModelo(nombreCompleto);
    } else {
      setRutaIMG(`/colores/${color.modelo}/${color.imagenColor}`);
      setNombreModelo(color.modelo);
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
          ? "rounded-lg lg:w-40 w-36 relative"
          : "rounded-lg lg:w-36 w-24 relative"
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex flex-col justify-center items-center pointer-events-none z-10 text-white">
          <p className=" text-xl text-center">{color.nombreColor}</p>
          <p>{color.grupo}</p>
          {acabadoSelec && <p>{acabadoSelec}</p>}
        </div>
      )}
      <div className="cursor-pointer" onClick={handleClick}>
        <Image
          src={
            color.grupo
              ? `/colores/${color.modelo.replace(/ g1/i, "")}/${color.grupo}/${color.imagenColor}`
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
