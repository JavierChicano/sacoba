"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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

export default function CardProductoDerecha({ datos }: { datos: CardProductoParams }) {
  const { titulo,
    link,
    img,
    descripcion1,
    descripcion2,
    descripcion3,
    descripcion4,
    descripcion5
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
    <section className="bg-fondoNormal items-center w-9/12 h-screen">
      <p className={`flex text-4xl justify-center ${isVisible ? 'animate-fade-down animate-duration-[3000ms] animate-ease-out' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{titulo}</p>
      <div className="flex gap-6 h-5/6 items-center justify-center mr-16">
        <div className="mt-20">
          <div className={`justify-end ml-12 w-3/4 ${isVisible ? 'animate-fade-right animate-once animate-ease-in animate-normal animate-duration-[2000ms]' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="flex items-center gap-4 text-xl mb-12 pl-36">
              <div ref={ref} className=" w-12 h-12">
                <Image className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/capasNegra.png"
                  width={100}
                  height={100}
                />
              </div>
              {descripcion1}
            </span>
            <span className="flex items-center gap-4 text-xl mb-12 pl-16">
              
              <div className=" w-12 h-12">
                <Image className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/superficeNegra.png"
                  width={100}
                  height={100}
                />
              </div>
              {descripcion2}
            </span>
            <span className="flex items-center gap-4 text-xl mb-12 pr-48">
              
              <div className=" w-12 h-12">
                <Image className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/pataNegra.png"
                  width={100}
                  height={100}
                />
              </div>
              {descripcion3}
            </span>
            <span className="flex items-center gap-4 text-xl mb-12 pl-16">
              
              <div className=" w-12 h-12">
                <Image className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/mesaNegra.png"
                  width={100}
                  height={100}
                />
              </div>
              {descripcion4}
            </span>
            <span className="flex items-center gap-4 text-xl mb-12 pl-36">
              
              <div className=" w-12 h-12">
                <Image className="w-full h-full filter invert" 
                  alt="iconoDescriptivo"
                  src="/iconosMain/mesaNegra.png"
                  width={100}
                  height={100}
                />
              </div>
              {descripcion5}
            </span>
          </div>
        </div>
        <div className={`mt-8 ml-8 border border-colorBase h-40 ${isVisible ? 'animate-fade-down animate-ease-out animate-normal animate-once animate-duration-[3000ms]' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className={`w-auto h-3/5 ${isVisible ? 'animate-fade-left animate-once animate-ease-in animate-normal animate-duration-[2500ms]' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            className="w-full h-full "
            src={`/productos/${img}`}
            alt="Logo de la marca"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
