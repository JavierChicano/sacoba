"use client";

import Image from "next/image";
import RutaBancoConcreto from "./rutaBancoC";
import SeccionModulosBanco from "./seccionModulosBanco";
import { TipoBanco, TipoColor } from "../../../../../tipos/tipos";
import SeccionPrecioBanco from "./seccionPrecioBanco";

export default function CompClienteBanco({bancoSeleccionado, coloresTapizado, coloresBastidor}: {bancoSeleccionado: TipoBanco[], coloresTapizado: TipoColor[], coloresBastidor: TipoColor[]}) {
  return (
    <div>
      {bancoSeleccionado && (
        <div className="max-w-7xl grid grid-cols-2 w-full gap-6">
          <RutaBancoConcreto />
          <h1 className="text-3xl lg:text-4xl border-b-2 border-colorBase col-span-2 ">
            {bancoSeleccionado[0].modelo}
          </h1>

          <section className="row-span-3 lg:col-span-1 col-span-2 h-fit">
            <Image
              className="w-full h-full max-h-[500px]"
              src={`/productos/bancos/${bancoSeleccionado[0].imagen}`}
              alt={`Imagen banco ${bancoSeleccionado[0].modelo}`}
              width={500}
              height={500}
            />
            <div>
              <p>Todos los módulos tienen 45cm de fondo</p>
              <p>La imagen es una sugerencia de presentacion compuesta por:</p>
              <p className="ml-4"> - 2 módulos de 120cm x 45cm y uno de 45cm x 45cm de rincón</p>
              <p className="ml-4"> - O bien, 1 módulo de 150cm x 45cm y otro de 120cm x 45cm</p>
            </div>
          </section>
          <SeccionModulosBanco bancosPosibles={bancoSeleccionado} coloresTapizado={coloresTapizado} coloresBastidor={coloresBastidor} />
          <SeccionPrecioBanco bancoSeleccionado={bancoSeleccionado} />
        </div>
      )}
    </div>
  );}

