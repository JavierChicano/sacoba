import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrecioTotalCarrito } from "../../../../states/states";

export default function ProductoCarrito({
  producto,
  clave,
}: {
  producto: any;
  clave: number;
})  {
  const { setSumaTotal } = usePrecioTotalCarrito();
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(1);

  const precioTotal = () => {
    setTotal(producto.cantidad * producto.precio);
  };
  const modelo = () => {
    const modelo = producto.modelo.toLowerCase();
    return modelo;
  };

  useEffect(() => {
    setSumaTotal(clave, total);
  }, [total]);
  
  useEffect(() => {
    precioTotal();
  }, [cantidad]);
  return (
    <article className="grid grid-cols-[1fr_2fr] gap-4">
      <div className="w-full h-full">
        <Image
          className="w-full h-full cursor-pointer rounded-lg"
          src={`/productos/${producto.producto}s/${modelo()}.png`}
          alt="Imagen mesa"
          width={500}
          height={500}
        />
      </div>
      <section>
        <h1 className="text-3xl">{producto.modelo}</h1>
        <div>
            <span>{producto.acabado}</span>
            <div>Precio: {Math.round(producto.precio*producto.cantidad)}€</div>
        </div>
      </section>
    </article>
  );
}
