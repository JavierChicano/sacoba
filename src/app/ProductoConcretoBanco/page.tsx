"use client";
import { useEffect, useState } from "react";
import { useBancoClickado, usePrecioAcumulado } from "../../../states/states";
import Image from "next/image";
import SeccionPrecio from "../components/productos/productoConcretoMesa/seccionPrecio";
import RutaPC from "../components/productos/productoConcretoMesa/rutaPC";
import SeccionModulosBanco from "../components/productos/productoConcretoBanco/seccionModulosBanco";
import RutaBancoConcreto from "../components/productos/productoConcretoBanco/rutaBancoC";

export default function ProductoConcretoBanco() {
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
    <main className="flex flex-col items-center">
      {bancoSeleccionado && (
        <div className=" max-w-7xl grid grid-cols-2 w-full gap-6">
          <RutaBancoConcreto />
          <h1 className="text-4xl border-b-2 border-colorBase col-span-2 ">
            {bancoSeleccionado[0].modelo}
          </h1>

          <section className="row-span-3 ">
            <Image
              className="w-full h-full max-h-[500px]"
              src={`/productos/bancos/${bancoSeleccionado[0].imagen}`}
              alt="Imagen mesa"
              width={500}
              height={500}
            />
          </section>
          <SeccionModulosBanco bancosPosibles={bancoSeleccionado} />
          <section>
            <p>Todos los módulos tienen 45cm de fondo</p>
            <p>La imagen es una sugerencia de presentacion compuesta por:</p>
            <ul>
              <li> - 2 módulos de 120cm x 45cm y uno de 45cm x 45cm de rincón</li>
              <li> - O bien, 1 módulo de 150cm x 45cm y otro de 120cm x 45cm</li>
            </ul>
          </section>
          <SeccionPrecio />
        </div>
      )}
    </main>
  );
}