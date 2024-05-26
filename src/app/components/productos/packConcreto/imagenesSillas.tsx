import Image from "next/image";

type ImagenesSillasParams = {
  nombre: string;
  img: string;
  selected: boolean;
  onSelect: (nombre: string) => void;
};

export default function ImagenesSillas({
  datos,
}: {
  datos: ImagenesSillasParams;
}) {
  const { nombre, img, selected, onSelect } = datos;

  return (
    <div
      className={`flex flex-col items-center cursor-pointer lg:gap-10 h-42 ${
        selected ? "border-b border-colorBase" : ""
      }`}
      onClick={() => onSelect(nombre)}
    >
      <h1 className="text-2xl lg:text-4xl">{nombre}</h1>
      <div className="lg:h-80 h-60">
        <Image
          src={`/productos/packs/${img}.png`}
          width={200}
          height={200}
          alt={`foto silla ${nombre}`}
          className="h-full w-auto"
        />
      </div>
      {selected && <h1 className="text-lg lg:text-2xl">Seleccionada: {nombre}</h1>}
    </div>
  );
}
