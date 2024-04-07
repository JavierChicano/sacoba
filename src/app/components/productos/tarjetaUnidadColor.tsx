import Image from "next/image";
import { TipoColor } from "../../../../tipos/tipos";

export default function UnidadColor({ color }: { color: TipoColor }) {
  return (
    <li className="rounded-lg w-32">
      <div>
        <Image
          src={color.grupo ? `/colores/${color.modelo}/${color.grupo}/${color.imagenColor}` : `/colores/${color.modelo}/${color.imagenColor}`}
          alt={`Color ${color.nombreColor}`}
          width={200}
          height={200}
        />
      </div>
    </li>
  );
}
