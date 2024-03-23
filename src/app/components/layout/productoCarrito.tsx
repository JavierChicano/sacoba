import Image from "next/image";

export default function ProductoCarrito() {
  return (
    <article className="grid grid-cols-[1fr_2fr] gap-4">
      <div className="w-full h-full">
        <Image
          className="w-full h-full cursor-pointer rounded-lg"
          src={`/productos/bancos/banco1.png`}
          alt="Imagen mesa"
          width={500}
          height={500}
        />
      </div>
      <section>
        <h1 className="text-3xl">Modelo</h1>
        <div className="grid grid-cols-2 ">
            <span>Producto</span>
            <span>Color</span>
            <div>Cantidad</div>
            <div>Precio</div>
        </div>
      </section>
    </article>
  );
}
