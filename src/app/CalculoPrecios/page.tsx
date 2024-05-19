"use client"
import { IconArrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function CalculoPrecios() {
  const [precio, setPrecio] = useState<number>(0);
  const [cantidad, setCantidad] = useState<number>(0);
  const [aumento, setAumento] = useState<number>(0);

  const handlePrecioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCantidad(parseFloat(e.target.value));
  };

  const handleAumentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAumento(parseFloat(e.target.value));
  };

  useEffect(() => {
    if (cantidad && aumento) {
      const precioConAumento = cantidad * (1 + aumento / 100);
      setPrecio(precioConAumento);
    } else {
      setPrecio(cantidad);
    }
  }, [cantidad, aumento]);

  return (
    <main className="h-[50vh] w-full justify-center flex flex-col">
      <section className="self-center gap-2 flex flex-col w-[420px]">
        <div className="gap-2 flex justify-between">
          PRECIO A CALCULAR :
          <input
            type="number"
            className="w-20 bg-emerald-200 text-black text-center"
            value={cantidad}
            onChange={handlePrecioChange}
          />
          <input
            type="number"
            className="w-32 bg-emerald-200 text-black text-center"
            placeholder="% de aumento"
            onChange={handleAumentoChange}
          />
        </div>
        <div className="flex text-2xl w-full justify-between">
          <h1>Coste del producto cliente:</h1>
          {precio.toFixed(2)}€
        </div>
        <div className="flex text-2xl w-full justify-between">
          <h1>Base imponible -sin iva-:</h1>
          {(precio / 1.21).toFixed(2)}€
        </div>
        <div className="flex text-2xl w-full justify-between">
          <h1>Coste de la mesa:</h1>
          {(precio * 0.65).toFixed(2)}€
        </div>
        <div className="flex text-2xl w-full justify-between">
          <h1>Ganancia total:</h1>
          {(precio / 1.21 - precio * 0.65).toFixed(2)}€
        </div>
      </section>
      <aside className="self-end mr-32 mt-20">
        Leyenda:
        <div className="flex flex-wrap flex-col">
          <div className="flex">
            PRECIO MESA <IconArrowRight /> CLIENTE
          </div>
          <div className="flex">
            PRECIO MESA x 1,21 <IconArrowRight /> BASE IMPONIBLE (PRECIO MESA SIN IMPUESTOS)
          </div>
          <div className="flex">
            PRECIO MESA x 0,65 <IconArrowRight /> COSTE
          </div>
          <div className="flex">
            BASE IMPONIBLE - COSTE <IconArrowRight /> GANANCIA
          </div>
        </div>
      </aside>
    </main>
  );
}
