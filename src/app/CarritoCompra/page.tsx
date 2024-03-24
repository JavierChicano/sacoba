import { IconArrowNarrowLeft } from "@tabler/icons-react";
import SeccionInfoProducto from "../components/CarritoCompra/seccionInfoProducto";
import Link from "next/link";

export default function CarritoCompra() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-7xl flex flex-col items-center w-full">
        <section className="bg-fondoSecundario w-full text-6xl flex justify-center items-center h-64 mb-10">
          Cesta de productos
        </section>
        <ul className="w-full flex justify-around text-3xl border-b border-colorBase">
          <li className="w-1/2 pl-10">Producto</li>
          <li className="w-1/2">
            <ul className="flex justify-around">
              <li className="w-32 flex justify-center">Unidad</li>
              <li className="w-32 flex justify-center">Cantidad</li>
              <li className="w-32 flex justify-center">Total</li>
            </ul>
          </li>
        </ul>
        <SeccionInfoProducto />
        <SeccionInfoProducto />
        <SeccionInfoProducto />
        <SeccionInfoProducto />
        <SeccionInfoProducto />
        <section className="w-full flex justify-around items-center text-2xl mt-4">
          <aside className="w-1/2 flex justify-center gap-2 cursor-pointer underline">
            <Link href="/" className="flex items-center">
              <IconArrowNarrowLeft stroke={2} />
              Seguir comprando
            </Link>
          </aside>

          <aside className="w-1/2 flex justify-around flex-col gap-4">
            <div className="w-42 justify-around flex items-center mt-16">
              <span className="w-32"></span>
              <span className="w-32 flex justify-center text-3xl">Total:</span>
              <span className="w-32 flex justify-center">XXX€</span>
            </div>
            <div className="w-full flex justify-end">
              <h1 className="p-2 bg-fondoSecundario border border-colorBase hover:bg-colorBase cursor-pointer">
                Proceder al pago
              </h1>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
