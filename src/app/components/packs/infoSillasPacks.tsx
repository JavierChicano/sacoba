"use client";
import Image from "next/image";
import { useState } from "react";

export default function InfoSillasPacks() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  return (
    <section className="w-full mb-20">
      <h1 className="text-2xl lg:text-4xl flex text-center">
        Estos son los distintos modelos de sillas y taburetes con respaldo
        disponibles para elegir en nuestros packs.
      </h1>
      <section className="flex w-full justify-between mt-20 gap-2 lg:gap-0">
        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered && (
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center pointer-events-none z-10 pb-20">
              <h1 className="text-white text-3xl bg-black/80 p-2">
                Modelo: Ker
              </h1>
            </div>
          )}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center pointer-events-none z-10 lg:hidden">
            <h1 className="text-white text-md bg-black/50 p-2 backdrop-blur-lg">
              Modelo: Ker
            </h1>
          </div>
          <Image
            src="/productos/packs/KerMix.png"
            width={300}
            height={300}
            alt="Foto silla y taburete packs"
          />
        </div>
        <div
          className="relative"
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          {hovered2 && (
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center pointer-events-none z-10 pb-20">
              <h1 className="text-white text-3xl bg-black/80 p-2">
                Modelo: Onda
              </h1>
            </div>
          )}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center pointer-events-none z-10 lg:hidden">
            <h1 className="text-white text-md bg-black/50 p-2 backdrop-blur-lg">
              Modelo: Onda
            </h1>
          </div>
          <Image
            src="/productos/packs/OndaMix.png"
            width={300}
            height={300}
            alt="Foto silla y taburete packs"
          />
        </div>
        <div
          className="relative"
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        >
          {hovered3 && (
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center pointer-events-none z-10 pb-20">
              <h1 className="text-white text-3xl bg-black/80 p-2">
                Modelo: Soria
              </h1>
            </div>
          )}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center pointer-events-none z-10 lg:hidden">
            <h1 className="text-white text-md bg-black/50 p-2 backdrop-blur-lg">
              Modelo: Soria
            </h1>
          </div>
          <Image
            src="/productos/packs/SoriaMix.png"
            width={300}
            height={300}
            alt="Foto silla y taburete packs"
          />
        </div>
      </section>
    </section>
  );
}
