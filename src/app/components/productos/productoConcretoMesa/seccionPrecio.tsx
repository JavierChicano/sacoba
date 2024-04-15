import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import {
  useMaterialBastidor,
  usePrecioAcumulado,
  usePreciosBanco,
} from "../../../../../states/states";
import Link from "next/link";

export default function SeccionPrecio() {
  const [cantidad, setCantidad] = useState(1);
  const { precioAcumulado, setPrecioAcumulado } = usePrecioAcumulado();
  const [ porcentaje, setPorcentaje ] = useState(1);
  const { precios } = usePreciosBanco();
  const { material } = useMaterialBastidor();

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  useEffect(() => {
    let acumulado = 0;
    precios.forEach((modulo) => {
      acumulado += modulo.precio * modulo.cantidad;
    });
    setPrecioAcumulado(acumulado);
  }, [precios, setPrecioAcumulado]);

  useEffect(() => {
    if (material != "Laminado") {
      setPorcentaje(1.2);
    }else{
      setPorcentaje(1);
    }
  }, [material]);
  return (
    <section className="bg-fondoSecundario flex flex-col gap-4 p-8 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Total: {Math.trunc(precioAcumulado * cantidad * porcentaje)}€</h1>
          {/* <p className="text-sm flex justify-end"> Iva incluido*</p> */}
        </div>
        <section className="flex w-36 border-[1px] border-fondoTerciario justify-between">
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
        </section>
        <section className="flex flex-col gap-4">
          <Link
            href="/"
            className="bg-fondoTerciario border-[1px] border-colorBase p-2 w-32 flex justify-center hover:bg-colorBase cursor-pointer"
            onClick={() => {
              setPrecioAcumulado(precioAcumulado * cantidad);
            }}
          >
            Añadir al carro
          </Link>
          {/* Este te tiene q llevar a la pagina de compra */}
          <Link
            href="/"
            className="bg-colorBase p-2 w-32 flex justify-center cursor-pointer"
            onClick={() => {
              setPrecioAcumulado(precioAcumulado * cantidad);
            }}
          >
            Comprar
          </Link>
        </section>
      </div>
    </section>
  );
}
