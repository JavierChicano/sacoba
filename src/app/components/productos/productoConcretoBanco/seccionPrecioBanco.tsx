import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { TipoBanco } from "../../../../../tipos/tipos";
import { useBancoFinal } from "../../../../../states/statesProductoFinal";

export default function SeccionPrecioBanco({
  bancoSeleccionado,
}: {
  bancoSeleccionado: TipoBanco[];
}) {
  //Estados globales
  const { banco, setPrecioBancoFinal, setCantidadBancos } = useBancoFinal();

  //Estados para concretar el precio final
  const [cantidad, setCantidad] = useState(1);
  const [precioBanco, setPrecioBanco] = useState(0);
  const [mostrarCompra, setMostrarCompra] = useState(false);

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const precioFinal = () => {
    const precio = Math.trunc(precioBanco * cantidad);
    return precio;
  };

  //Aqui se calcula el precio del banco en funcion de la seleccion final
  useEffect(() => {
    let costeModulosTotal = 0;
    //Calcular el precio del material
    banco.modulos.forEach((modulo) => {
      costeModulosTotal += modulo.precioModulo * modulo.cantidad;
    });
    if (banco.acabadoBastidor === "Laca") {
      setPrecioBanco(costeModulosTotal * 1.2);
    } else {
      setPrecioBanco(costeModulosTotal);
    }

    //Solo mostramos la opcion de compra cuando todas las selecciones esten definidas
    if (banco.colorBastidor  && banco.colorTapizado) {
      setMostrarCompra(true);
    }else{
      setMostrarCompra(false)
    }
  }, [banco]);
  console.log(banco);
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
          {mostrarCompra ? (
            <>
              <Link
                href="/CarritoCompra"
                className="bg-fondoTerciario border-[1px] border-colorBase p-2 w-32 flex justify-center hover:bg-colorBase cursor-pointer"
                onClick={() => {
                  setPrecioBancoFinal(precioFinal());
                  setCantidadBancos(cantidad);
                }}
              >
                Añadir al carro
              </Link>
              {/* Este te tiene q llevar a la pagina de compra */}
              <Link
                href="/"
                className="bg-colorBase p-2 w-32 flex justify-center cursor-pointer"
                onClick={() => {
                  setPrecioBancoFinal(precioFinal());
                  setCantidadBancos(cantidad);
                }}
              >
                Comprar
              </Link>
            </>
          ) : (
            <p className="w-32 text-center text-red-400">
              Defina los acabados del banco
            </p>
          )}
        </section>
      </div>
    </section>
  );
}
