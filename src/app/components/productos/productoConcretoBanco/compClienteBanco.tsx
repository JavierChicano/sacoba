"use client";

import Image from "next/image";
import { ReactNode, useEffect } from "react";
import {
  useBancoClickado,
  usePrecioAcumulado,
} from "../../../../../states/states";
import RutaBancoConcreto from "./rutaBancoC";
import SeccionPrecio from "../productoConcretoMesa/seccionPrecio";
import SeccionModulosBanco from "./seccionModulosBanco";

export default function CompClienteBanco({InsertarDatosACarrito,}: {InsertarDatosACarrito: React.ReactNode;}) {
  const { bancoSeleccionado } = useBancoClickado();
  const { precioAcumulado, setPrecioAcumulado } = usePrecioAcumulado();

  useEffect(() => {
    if (bancoSeleccionado !== null) {
      const preciosArray = bancoSeleccionado[0].precio.split(",").map(Number);
      console.log(preciosArray);
    }
  }, []);
  console.log(bancoSeleccionado);
  console.log(precioAcumulado);

  return (
    // {InsertarDatosACarrito}
    <div>
      {bancoSeleccionado && (
        <div className=" max-w-7xl grid grid-cols-2 w-full gap-6">
          <RutaBancoConcreto />
          <h1 className="text-4xl border-b-2 border-colorBase col-span-2 ">
            {bancoSeleccionado[0].modelo}
          </h1>

          <div className="row-span-3 ">
            <Image
              className="w-full h-full max-h-[500px]"
              src={`/productos/bancos/${bancoSeleccionado[0].imagen}`}
              alt="Imagen mesa"
              width={500}
              height={500}
            />
          </div>
          <SeccionModulosBanco bancosPosibles={bancoSeleccionado} />
          <div>
            <p>Todos los módulos tienen 45cm de fondo</p>
            <p>La imagen es una sugerencia de presentacion compuesta por:</p>
            <ul></ul>
            <li> - 2 módulos de 120cm x 45cm y uno de 45cm x 45cm de rincón</li>
            <li> - O bien, 1 módulo de 150cm x 45cm y otro de 120cm x 45cm</li>
          </div>
          <SeccionPrecio />
        </div>
      )}
    </div>
  );}

