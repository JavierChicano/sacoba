"use client";
import { useState } from "react";
import { TipoPack } from "../../../../tipos/tipos";
import Image from "next/image";
import { IconArrowRightBar } from "@tabler/icons-react";
import Link from "next/link";
import router from "next/router";

export default function TarjetaDisplayPacks({
  datos,
  posicion,
}: {
  datos: TipoPack;
  posicion: number;
}) {
  const handleClick = () => {
    router.push(`/PackConcreto/${datos.modelo}`);
  };

  const obtenerArrayDimensiones = (dimensionesString: string): string[] => {
    return dimensionesString.split(",");
  };
  const dimensiones = obtenerArrayDimensiones(datos.dimensiones);
  const aumento = 106;
  const obtenerArrayPrecio = (precioString: string): number[] => {
    return precioString.split(",").map((precio) => parseFloat(precio.trim()));
  };
  const precios = obtenerArrayPrecio(datos.precio);
  console.log(precios);
  return (
    <>
      {/* Esto simplemente es un relleno de codigo, para situar correctamente los section */}
      {posicion % 2 !== 0 && (
        <>
          <div></div>
          <div></div>
        </>
      )}
      <section className="col-span-2 w-full bg-fondoSecundario h-96 grid grid-cols-2">
        <div
          className={`${posicion % 2 !== 0 ? "" : "order-2"} overflow-hidden`}
        >
          <Image
            className="w-full h-full cursor-pointer"
            src={`/productos/packs/${datos.imagenMesa}`}
            alt="Imagen mesa"
            width={500}
            height={500}
          />
        </div>
        <section className="p-5 relative overflow-hidden">
          <div className="z-10 h-full flex flex-col justify-between">
            <h1 className="text-4xl border-b border-colorBase mb-2">
              {datos.modelo}
            </h1>
            <h2 className="mb-2">{datos.descripcion}</h2>
            <div>
              Disponible en las siguientes medidas (cm):{" "}
              <ul className="grid grid-cols-2 mb-2">
                {dimensiones.length > 0 ? (
                  dimensiones.map((dimension, index) => (
                    <li key={index}>- {dimension}</li>
                  ))
                ) : (
                  <li>No hay packs disponibles</li>
                )}
              </ul>
            </div>
            <h1 className="text-2xl border-b border-colorBase w-fit mb-2">
              Diferentes packs
            </h1>
            <section className=" justify-around text-xl">
              <div className="flex items-center gap-2">
                Mesa <IconArrowRightBar stroke={2} /> desde: {precios[0]}€
              </div>
              <div className="flex items-center gap-2">
                Mesa + 2 Sillas <IconArrowRightBar stroke={2} /> desde:{" "}
                {precios[0] + aumento}€
              </div>
              <div className="flex items-center gap-2 ">
                Mesa + 4 Sillas <IconArrowRightBar stroke={2} /> desde:{" "}
                {precios[0] + aumento * 2}€
              </div>
            </section>
            <div className=" text-xl">
              <Link
                href={`/PackConcreto/${datos.modelo}`}
                onClick={handleClick}
                className="underline text-colorBase"
              >
                Ver opciones de compra
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
