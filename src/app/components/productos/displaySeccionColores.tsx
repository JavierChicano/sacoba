import { useEffect, useState } from "react";
import { TipoColor } from "../../../../tipos/tipos";
import UnidadColor from "./tarjetaUnidadColor";

interface ColorPorModelo {
  modelo: string;
  colores: TipoColor[];
}

export default function DisplayColores({
  colorModelo,
}: {
  colorModelo: ColorPorModelo[];
}) {
  const [modelo, setModelo] = useState("");

  const mayuscula = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const cambiarNombresModelo = (modelo: string) => {
    if (modelo === "tapizado nvC") {
      return "Tapizado normal";
    } else if (modelo === "tapizado nvA") {
      return "Tapizado premium";
    } else if (modelo === "silestone g1") {
      return "Silestone";
    } else if (modelo === "dekton g1") {
      return "Dekton";
    }
    return modelo;
  };

  useEffect(() => {
    colorModelo.forEach((item) => {
      const modelo = item.modelo;
      setModelo(modelo);
    });
  }, []);

  return (
    <section>
      {colorModelo.map((item, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-4xl mb-4 mt-6">
            {mayuscula(cambiarNombresModelo(item.modelo))}
          </h2>
          <ul className="flex list-none flex-wrap gap-4">
            {item.colores.map((color, colorIndex) => (
              <UnidadColor color={color} key={colorIndex} />
            ))}
          </ul>
        </div>
      ))}

      {modelo === "laminado" && <p className="text-xs">Para seleccionar un acabado, clickar sobre el cuadro blanco correspondiente.</p>}
      {(modelo === "silestone g1" || modelo === "dekton g1") && <p className="text-xs">En funcion del grupo el material se encarece.*</p>}
      <p className="text-xs">La representacion es una estimación del color del material real.</p>
    </section>
  );
}
