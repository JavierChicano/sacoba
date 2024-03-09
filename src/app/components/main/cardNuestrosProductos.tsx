import Image from "next/image";

type CardProductoParams = {
  titulo: string;
  link: string;
  img: string;
};

export default function CardProducto({ datos }: { datos: CardProductoParams }) {
  const { titulo, link, img } = datos;

  return (
    <section className="bg-fondoSecundario p-5 w-60">
      <Image
        className="w-auto h-96 -mt-48"
        src={`/productos/${img}`}
        alt="Logo de la marca"
        width={256}
        height={256}
      />
      <h1 className="text-4xl mt-4">{titulo}</h1>
      <button className="bg-fondoTerciario p-2 self-center w-full my-2 hover:text-black hover:bg-colorBase">Ir a {link}</button>
    </section>
  );
}
