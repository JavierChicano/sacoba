import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import {
  useColorSeleccionadoBastidor,
  usePrecioAcumulado,
  usePreciosBanco,
} from "../../../../../states/states";
import Link from "next/link";
import { TipoMesa } from "../../../../../tipos/tipos";
import { useIndexMesaFinal, useMesaFinal } from "../../../../../states/statesProductoFinal";

export default function SeccionPrecio({
  mesaSeleccionada,
}: {
  mesaSeleccionada: TipoMesa[];
}) {
  const [cantidad, setCantidad] = useState(1);
  const { precioAcumulado, setPrecioAcumulado } = usePrecioAcumulado();
  const { mesa } = useMesaFinal();
  const { index } = useIndexMesaFinal();
  
  const ajustarNombre = () => {
    const modelo = index.acabado.toLowerCase().replace(/ (\w+)$/i, " g1");
    return modelo;
  };

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  const precioFinal = () => {
    const precio = Math.trunc(precioAcumulado * cantidad);
    return precio;
  };
  console.log(index)
  console.log(mesaSeleccionada)
  //Aqui se calcula el precio de la mesa en funcion de la seleccion final
  useEffect(()=>{
    let material = "";
    if(index.acabado.startsWith("Silestone") || index.acabado.startsWith("Dekton")){
      material =  ajustarNombre()
    }else{
      material =  index.acabado.toLowerCase()
    }
    






      
  },[mesa, index, mesaSeleccionada])

  return (
    <section className="bg-fondoSecundario flex flex-col gap-4 p-8 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Total: {precioFinal()}€</h1>
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
              setPrecioAcumulado(precioFinal());
            }}
          >
            Añadir al carro
          </Link>
          {/* Este te tiene q llevar a la pagina de compra */}
          <Link
            href="/"
            className="bg-colorBase p-2 w-32 flex justify-center cursor-pointer"
            onClick={() => {
              setPrecioAcumulado(precioFinal());
            }}
          >
            Comprar
          </Link>
        </section>
      </div>
    </section>
  );
}
