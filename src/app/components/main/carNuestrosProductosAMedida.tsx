"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { TextGenerateEffect } from "./generadorTexto";
const texto = "¡Personaliza tu mesa a medida! Elige la encimera y estructura por separado. Consiguiendo un proceso de personalización detallado para una mesa única.";

export default function CardProductoAMedida() {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section ref={ref} className="flex w-full flex-col items-center lg:h-screen h-1/2">
      <p
        className={`flex text-4xl lg:text-5xl justify-center h-24 lg:h-40 items-center ${
          isVisible
            ? "animate-fade-down animate-duration-[3000ms] animate-ease-out"
            : ""
        } ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        A medida
      </p>
      <div className={`flex self-center w-3/4 lg:w-full`}>
        <TextGenerateEffect words={texto} view={isVisible} />
      </div>
      <div>
        <div
          className="relative w-full h-full"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered && (
            <div className="absolute w-full h-full bg-black/80 flex justify-center items-center pointer-events-none z-10">
              <span className="text-white text-4xl"> Ir a: <span className="border-b border-colorBase">A medida</span></span>
            </div>
          )}
          <Link href="/ProductoAMedida/" className="w-full flex justify-center">
            <Image
              className={`lg:w-full w-3/4 ${
                isVisible
                  ? "animate-fade animate-duration-[2000ms] animate-ease-linear"
                  : ""
              } ${isVisible ? "opacity-100" : "opacity-0"}`}
              src={`/aMedida.png`}
              alt="Logo de la marca"
              width={900}
              height={900}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
