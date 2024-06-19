import Image from "next/image";

export default function ColorSilestone({
  grado,
  color
}: {
  grado: string;
  color: string;
}) {
  const nombreColor = () => {
    const nombreColor = color.split(".");
    return nombreColor[0];
  };
  return (
    <div className="hover:scale-110">
      <Image
        src={`/colores/silestone/${grado}/${color}`}
        alt="Logo marca silestone"
        width={130}
        height={130}
      />
      <p>{nombreColor()}</p>
    </div>
  );
}
