"use client";
import { IconArmchair } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function CardInfoSilla() {
  
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
      <p className={`flex text-5xl justify-center h-40 items-center ${isVisible ? 'animate-fade-down animate-duration-[3000ms] animate-ease-out' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Sillas</p>
      <div className="flex gap-10 items-start">
        <div>
          <div className={`flex flex-col items-center w-72 ${isVisible ? 'animate-fade-right animate-once animate-ease-in animate-normal animate-duration-[2000ms]' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="flex items-center gap-4 text-xl h-24 self-end">
              <div ref={ref} className=" w-12 h-12">
                <Image className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/capasNegra.png"
                  width={100}
                  height={100}
                />
              </div>
              <span className="w-20 flex justify-end">Formatos</span>
              
            </span>
            <span className="flex items-center gap-4 text-xl h-24 self-center">
              
              <div className=" w-12 h-12">
                <Image className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/superficeNegra.png"
                  width={100}
                  height={100}
                />
              </div>
              Tamaños
            </span>
            <span className="flex items-center gap-4 text-xl h-24 self-start">
              
              <div className="w-6 h-10">
                <Image className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/pataNegra.png"
                  width={100}
                  height={100}
                />
              </div>
              Bastidores
            </span>
            <span className="flex items-center gap-4 text-xl h-24 self-center">
              
              <div className=" w-12 h-12">
                <Image className="w-full h-full filter invert"
                  alt="iconoDescriptivo"
                  src="/iconosMain/mesaNegra.png"
                  width={100}
                  height={100}
                />
              </div>
              dssd
            </span>
            <span className="self-end">
              <Link
                href="/ProductoSilla/"
                className="flex items-center gap-4 text-xl h-24 "
              >
                <div className=" w-12 h-12">
                  <IconArmchair size={50} />
                </div>
                <span className="text-colorBase w-20 flex justify-start">Ir a ver</span>
                
              </Link>
            </span>
          </div>
        </div>
        <div className={`border border-colorBase h-40 self-center  ${isVisible ? 'animate-fade-down animate-ease-out animate-normal animate-once animate-duration-[3000ms]' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`w-full h-full ${isVisible ? 'animate-fade-left animate-once animate-ease-in animate-normal animate-duration-[2500ms]' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            className="w-full h-full "
            src={`/productos/silla.png`}
            alt="Logo de la marca"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}