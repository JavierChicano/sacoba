"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function CardInfoBanco() {
  const { theme } = useTheme();
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
    <section className="flex w-full flex-col items-center lg:h-screen h-1/2">
      <p
        className={`flex text-4xl lg:text-5xl justify-center lg:h-40 items-center ${
          isVisible
            ? "animate-fade-down animate-duration-[3000ms] animate-ease-out"
            : ""
        } ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        Bancos
      </p>
      <div className="flex lg:gap-10 items-start flex-col lg:flex-row">
        <div
          ref={ref}
          className={`w-full h-full flex justify-center ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <Link href={"/ProductoBanco/"} className="w-full flex justify-center">
          <Image
            className={`w-3/4 lg:w-full ${
              isVisible
                ? "animate-fade-right animate-once animate-ease-in animate-normal animate-duration-[2000ms]"
                : ""
            }`}
            src={`/productos/banco.png`}
            alt="Imagen de producto banco"
            width={500}
            height={500}
          />
          </Link>
        </div>
        <div
          className={`hidden lg:block border border-colorBase h-40 self-center ${
            isVisible
              ? "animate-fade-down animate-ease-out animate-normal animate-once animate-duration-[3000ms]"
              : ""
          } ${isVisible ? "opacity-100" : "opacity-0"}`}
        ></div>
        <div>
          <div
            className={`hidden lg:flex flex-col items-center w-72 ${
              isVisible
                ? "animate-fade-left animate-once animate-ease-in animate-normal animate-duration-[2500ms]"
                : ""
            } ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <span className="flex items-center gap-4 text-xl h-24 self-start">
              <span className="w-20 flex justify-end">Tapizados</span>
              <div className="w-12 h-12">
                <Image
                  className={
                    theme === "light"
                      ? "w-full h-full"
                      : "w-full h-full filter invert"
                  }
                  alt="iconoDescriptivo"
                  src="/iconosMain/capasNegra.png"
                  width={100}
                  height={100}
                />
              </div>
            </span>
            <span className="flex items-center gap-4 text-xl h-24 self-center">
              Módulos
              <div className=" w-12 h-12">
                <Image
                  className={
                    theme === "light"
                      ? "w-full h-full"
                      : "w-full h-full filter invert"
                  }
                  alt="iconoDescriptivo"
                  src="/iconosMain/superficeNegra.png"
                  width={100}
                  height={100}
                />
              </div>
            </span>
            <span className="flex items-center gap-4 text-xl h-24 self-end">
              Bastidores
              <div className="w-6 h-10">
                <Image
                  className={
                    theme === "light"
                      ? "w-full h-full"
                      : "w-full h-full filter invert"
                  }
                  alt="iconoDescriptivo"
                  src="/iconosMain/pataNegra.png"
                  width={200}
                  height={200}
                />
              </div>
            </span>
            <span className="flex items-center gap-4 text-xl h-24 self-center">
              dsd
              <div className=" w-12 h-12">
                <Image
                  className={
                    theme === "light"
                      ? "w-full h-full"
                      : "w-full h-full filter invert"
                  }
                  alt="iconoDescriptivo"
                  src="/iconosMain/mesaNegra.png"
                  width={100}
                  height={100}
                />
              </div>
            </span>
            <span className="self-start">
              <Link
                href="/ProductoBanco/"
                className="flex items-center gap-4 text-xl h-24 "
              >
                <span className="text-colorBase w-20 flex justify-end underline decoration-colorBase">
                  Ir a ver
                </span>
                <div className=" w-12 h-12">
                  <Image
                    className={
                      theme === "light"
                        ? "w-full h-full"
                        : "w-full h-full filter invert"
                    }
                    src="/iconos/banco.png"
                    alt="Icono de un banco"
                    width={50}
                    height={50}
                  />
                </div>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <Link
        href="/ProductoBanco/"
        className="flex lg:hidden items-center w-full justify-center text-2xl underline decoration-colorBase gap-4 mt-2"
      >
        <span className="text-colorBase w-20 flex justify-end">Ir a ver</span>
        <div className="w-12 h-12">
          <Image
            className={
              theme === "light"
                ? "w-full h-full"
                : "w-full h-full filter invert"
            }
            src="/iconos/banco.png"
            alt="Icono de un banco"
            width={35}
            height={35}
          />
        </div>
      </Link>
    </section>
  );
}
