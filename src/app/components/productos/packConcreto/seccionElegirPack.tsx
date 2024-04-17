import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrecioAcumulado } from "../../../../../states/states";
import Link from "next/link";

export default function ElegirPack({
  mesa,
  modelo,
  formato,
}: {
  mesa: string;
  modelo: string;
  formato: string;
}) {
  const [packSeleccionado, setPackSeleccionado] = useState("Mesa y 2 sillas");
  const [cantidad, setCantidad] = useState(0);
  const { precioAcumulado, setPrecioAcumulado } = usePrecioAcumulado();
  const [precioSillas, setPrecioSillas] = useState(0);

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
    console.log("modelo",modelo+formato)
  };
  useEffect(() => {
    if (packSeleccionado == "Mesa") {
      setPrecioSillas(0);
    } else if (packSeleccionado == "Mesa y 2 sillas") {
      setPrecioSillas(106);
    } else if (packSeleccionado == "Mesa y 4 sillas") {
      setPrecioSillas(212);
    }
  }, [packSeleccionado]);

  return (
    <section className="grid grid-cols-2 w-full">
      <div className="flex justify-end relative">
        <Image
          src={`/productos/packs/${mesa}.png`}
          width={500}
          height={500}
          alt="foto mesa"
          className="h-full"
        />
        <div
          className={`absolute h-60 w-60 bottom-0 right-0 bg-black/50 p-4 flex justify-center ${
            packSeleccionado === "Mesa" ? "hidden" : "block"
          }`}
        >
          <Image
            src={`/productos/packs/${modelo}${formato === "Silla" ? "Silla" : "Tab"}.png`}
            width={300}
            height={300}
            alt="foto silla"
            className="h-full w-auto"
          />
        </div>
      </div>
      <div className="bg-fondoSecundario p-8 flex flex-col gap-4 items-center w-full">
        <aside
          className={`text-3xl p-2 w-full flex justify-center cursor-pointer ${
            packSeleccionado === "Mesa" ? "bg-colorBase" : "bg-fondoTerciario"
          }`}
          onClick={() => setPackSeleccionado("Mesa")}
        >
          Mesa
        </aside>
        <aside
          className={`text-3xl p-2 w-full flex justify-center cursor-pointer ${
            packSeleccionado === "Mesa y 2 sillas"
              ? "bg-colorBase"
              : "bg-fondoTerciario"
          }`}
          onClick={() => setPackSeleccionado("Mesa y 2 sillas")}
        >
          Mesa y 2 sillas
        </aside>
        <aside
          className={`text-3xl p-2 w-full flex justify-center cursor-pointer ${
            packSeleccionado === "Mesa y 4 sillas"
              ? "bg-colorBase"
              : "bg-fondoTerciario"
          }`}
          onClick={() => setPackSeleccionado("Mesa y 4 sillas")}
        >
          Mesa y 4 sillas
        </aside>
        <section className="w-full flex gap-4 items-center mt-8 mb-8">
          <h1 className="text-2xl">
            Añadir sillas extra <span className="text-xl">(64€/u)</span>
          </h1>
          <aside className="flex w-36 border-[1px] border-fondoTerciario justify-between">
            <div
              className="bg-fondoTerciario p-2 flex justify-center hover:bg-colorBase cursor-pointer"
              onClick={() => {
                disminuirCantidad();
              }}
            >
              <IconMinus stroke={2} />
            </div>
            <div className="bg-fondoSecundario w-8  p-2 flex justify-center ">
              {cantidad}
            </div>
            <div
              className="bg-fondoTerciario p-2 flex justify-center hover:bg-colorBase cursor-pointer"
              onClick={() => {
                aumentarCantidad();
              }}
            >
              <IconPlus stroke={2} />
            </div>
          </aside>
        </section>
        <section className="w-full h-full flex items-end justify-between">
          {precioAcumulado ? (
            <>
              <h1 className="text-3xl">
                Total: {precioAcumulado + precioSillas + 64 * cantidad}€
              </h1>
              <section className="flex gap-4">
                <Link
                  href="/"
                  className="bg-fondoTerciario border-[1px] border-colorBase p-2 w-32 flex justify-center hover:bg-colorBase cursor-pointer"
                  onClick={() => {
                    setPrecioAcumulado(
                      precioAcumulado + precioSillas + 64 * cantidad
                    );
                  }}
                >
                  Añadir al carro
                </Link>
                {/* Este te tiene q llevar a la pagina de compra */}
                <Link
                  href="/"
                  className="bg-colorBase p-2 w-32 flex justify-center cursor-pointer"
                  onClick={() => {
                    setPrecioAcumulado(
                      precioAcumulado + precioSillas + 64 * cantidad
                    );
                  }}
                >
                  Comprar
                </Link>
              </section>
            </>
          ) : (
            <h1 className="text-red-500">
              Para ver el precio, configura la mesa primero
            </h1>
          )}
        </section>
      </div>
    </section>
  );
}
