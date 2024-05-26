import Image from "next/image";

export default function AcabadoLaminado({
  acabado,
  onClick,
  onHover,
}: {
  acabado: string;
  onClick: (acabado: string) => void;
  onHover: (acabado: string) => void;
}) {
  const acabadoTrim = acabado.trim();

  const handleClick = () => {
    // Llamamos a la función onClick pasándole el acabado
    onClick(acabadoTrim);
  };

  const handleHover = () => {
    // Llamamos a la función onHover pasándole el acabado
    onHover(acabadoTrim);
  };

  return (
    <div
      className="hover:scale-110 border border-colorBase"
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={() => onHover("")}
    >
      <Image
        src={`/colores/laminado/ACABADOS/${acabadoTrim}.png`}
        alt={`Acabado ${acabado}`}
        width={40}
        height={40}
      />
    </div>
  );
}
