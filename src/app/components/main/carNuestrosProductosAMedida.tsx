"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { TextGenerateEffect } from "./generadorTexto";



type CardProductoParams = {
  titulo: string;
  link: string;
  img1: string;
};

export default function CardProductoAMedida({ datos }: { datos: CardProductoParams }) {
  const { titulo,
    link,
    img1,
  } = datos;
  const [hovered, setHovered] = useState(false);
  
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
  const texto = "¡Personaliza tu mesa a medida! Elige la encimera y estructura por separado. Recomendamos comenzar con la encimera y luego seleccionar la estructura. Proceso de personalización detallado para una mesa única."
  return (
    <section ref={ref} className="bg-fondoNormal items-center w-9/12 h-screen">
      <p className={`flex text-4xl justify-center ${isVisible ? 'animate-fade-down animate-duration-[3000ms] animate-ease-out' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{titulo}</p>
      <div className="flex mt-20 self-center animate-fade-left animate-once animate-ease-in animate-normal animate-duration-[3000ms]">
            <TextGenerateEffect words={texto}/>
      </div>
      <div className="flex gap-6 h-3/6 items-center justify-center ">     
            <div className="relative w-1/2 h-5/6"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
                {hovered && (
                  <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center pointer-events-none z-10">
                    <p className="text-white">A medida</p>
                  </div>
                )}
              <Link href="/ProductoAMedida/">
                <Image
            className={`w-full h-full ${isVisible ? 'animate-fade animate-duration-[2000ms] animate-ease-linear' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    src={`/productos/${img1}`}
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
