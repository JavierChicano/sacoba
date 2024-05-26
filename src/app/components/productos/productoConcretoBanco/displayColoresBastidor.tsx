import { TipoColor } from "../../../../../tipos/tipos";
import UnidadColorBastidor from "./unidadColorBastidor";

interface ColorPorModelo {
    modelo: string;
    colores: TipoColor[];
}

export default function DisplayColoresBastidor({colorModelo}:{colorModelo: ColorPorModelo[]}){
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
    return(
        <section>
            {colorModelo.map((item, index) => (
                <div key={index}>
                    <h2 className="text-2xl lg:text-4xl mb-2 lg:mb-4 mt-6">{mayuscula(cambiarNombresModelo(item.modelo))}</h2>
                    {/* Aquí puedes iterar sobre los colores de este modelo */}
                    <ul className="flex list-none flex-wrap gap-4 justify-center lg:justify-normal">
                        {item.colores.map((color, colorIndex) => (
                            <UnidadColorBastidor color={color} key={colorIndex}/>
                        ))}
                    </ul>
                    
                </div>
            ))}
        </section>
    )
}