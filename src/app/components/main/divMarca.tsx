import Image from "next/image";

type DivMarcaParams = {
  img: string;
  marca: string;
};

export default function DivMarca({ datos }: { datos: DivMarcaParams }) {
  const { img, marca } = datos;

  return (
    <div className="bg-fondoSecundario p-10 text-4xl hover:text-black hover:bg-colorBase cursor-pointer">
      <Image
        className="w-auto h-16 -mt-20 absolute"
        src={`/marcas/${img}`}
        alt="Logo de la marca"
        width={256}
        height={256}
      />
      <h1>{marca}</h1>
    </div>
  );
}
