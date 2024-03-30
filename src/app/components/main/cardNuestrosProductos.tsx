"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState } from "react";

type CardProductoParams = {
  titulo: string;
  link: string;
  img: string;
  descripcion1: string;
  descripcion2: string;
  descripcion3: string;
  descripcion4: string;
  descripcion5: string;
};

export default function CardProducto({ datos }: { datos: CardProductoParams }) {
  const {
    titulo,
    link,
    img,
    descripcion1,
    descripcion2,
    descripcion3,
    descripcion4,
    descripcion5,
  } = datos;

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Cambia este valor según tus necesidades
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="flex w-full flex-col items-center h-screen">
      <p
        className={`flex text-5xl justify-center h-40 items-center ${
          isVisible
            ? "animate-fade-down animate-duration-[3000ms] animate-ease-out"
            : ""
        } ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {titulo}
      </p>
      <div className="flex gap-10 items-start">
        <div
          ref={ref}
          className={`w-full h-full ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            className={`w-full h-full ${
              isVisible
                ? "animate-fade-right animate-once animate-ease-in animate-normal animate-duration-[2000ms]"
                : ""
            }`}
            src={`/productos/${img}`}
            alt="Logo de la marca"
            width={500}
            height={500}
          />
        </div>
        <div
          className={` border border-colorBase h-40 self-center ${
            isVisible
              ? "animate-fade-down animate-ease-out animate-normal animate-once animate-duration-[3000ms]"
              : ""
          } ${isVisible ? "opacity-100" : "opacity-0"}`}
        ></div>
        <div>
          <div
            className={`flex flex-col items-center w-72 ${
              isVisible
                ? "animate-fade-left animate-once animate-ease-in animate-normal animate-duration-[2500ms]"
                : ""
            } ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <span className="flex items-center gap-4 text-xl h-24 self-start">
              {descripcion1}
              <div className="w-12 h-12">
                <Image
                  className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/capasNegra.png"
                  width={100}
                  height={100}
                />
              </div>
            </span>
            <span className="flex items-center gap-4 text-xl h-24 self-center">
              {descripcion2}
              <div className=" w-12 h-12">
                <Image
                  className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/superficeNegra.png"
                  width={100}
                  height={100}
                />
              </div>
            </span>
            <span className="flex items-center gap-4 text-xl h-24 self-end">
              {descripcion3}
              <div className="w-6 h-10">
                <Image
                  className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/pataNegra.png"
                  width={200}
                  height={200}
                />
              </div>
            </span>
            <span className="flex items-center gap-4 text-xl h-24 self-center">
              {descripcion4}
              <div className=" w-12 h-12">
                <Image
                  className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/mesaNegra.png"
                  width={100}
                  height={100}
                />
              </div>
            </span>
            <span className="flex items-center gap-4 text-xl h-24 self-start">
              {descripcion5}
              <div className=" w-12 h-12">
                <Image
                  className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/mesaNegra.png"
                  width={100}
                  height={100}
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
