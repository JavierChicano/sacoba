import Image from "next/image";
import { useEffect, useState } from "react";
import { useColorSeleccionadoBastidor, useModalBastidor,  } from "../../../../../states/states";
import { TipoColor } from "../../../../../tipos/tipos";

export default function UnidadColorBastidor({ color }: { color: TipoColor }) {
  const [hovered, setHovered] = useState(false);
  const [ rutaIMG, setRutaIMG] =  useState("");
  const {setModalVisibleBastidor} = useModalBastidor();
  const {setColorSeleccionadoBastidor } =
    useColorSeleccionadoBastidor();

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
  
  useEffect(()=>{
    if(color.grupo){
      setRutaIMG(`/colores/${color.modelo}/${color.grupo}/${color.imagenColor}`)
    }else{
      setRutaIMG(`/colores/${color.modelo}/${color.imagenColor}`)
    }
  },[])
  return (
    <li
      className="rounded-lg w-36 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex flex-col justify-center items-center pointer-events-none z-10">
          <p className="text-white text-xl text-center">{color.nombreColor}</p>
        </div>
      )}
      <div
        className="cursor-pointer"
        onClick={() => {
          setColorSeleccionadoBastidor(color.nombreColor, mayuscula(cambiarNombresModelo(color.modelo)), rutaIMG);
          setModalVisibleBastidor(false);
        }}
      >
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
      </div>
    </li>
  );
}
