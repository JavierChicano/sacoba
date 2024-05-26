"use client";
import { useState, useRef } from "react";
import { cn } from "@nextui-org/react";
import TarjetaDisplayInfo from "./tarjetaDisplayInfo";
import { TipoMesa } from "../../../../../tipos/tipos";
import IconArrowIzquierda from "../../iconos/iconoFlechaIzq";
import IconArrowDerecha from "../../iconos/iconoFlechaDer";

export default function ObjMesasTendencias({
  mesasTendencias,
}: {
  mesasTendencias: TipoMesa[];
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current && contentRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
      setContainerWidth(containerRef.current.clientWidth);
      setContentWidth(contentRef.current.scrollWidth);
    }
  };

  const scrollToLeft = () => {
    if (containerRef.current && contentRef.current) {
      containerRef.current.scrollLeft -= 316;
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const scrollToRight = () => {
    if (containerRef.current && contentRef.current) {
      containerRef.current.scrollLeft += 316;
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  return (
    <>
      <section className="flex justify-between pt-10 lg:pb-5 pb-2 w-full">
        <h1 className="text-3xl lg:text-4xl">Tendencias</h1>
        <span className="lg:flex items-center gap-1 hidden">
          <div onClick={scrollToLeft}>
            <IconArrowIzquierda />
          </div>
          <div onClick={scrollToRight}>
            <IconArrowDerecha />
          </div>
        </span>
      </section>
      <div
        ref={containerRef}
        className={cn(
          "w-screen lg:max-w-7xl flex flex-row gap-4 pb-2 lg:p-0 px-4",
          "overflow-x-scroll"
        )}
        style={{ scrollBehavior: "smooth" }}
        onScroll={handleScroll}
      >
        <div ref={contentRef} className="flex w-screen" >
          {mesasTendencias.length > 0 ? (
            mesasTendencias.map((mesa, index) => (
              <div key={index} style={{ marginRight: "16px" }}>
                <TarjetaDisplayInfo
                  key={mesa.id}
                  datos={mesa}
                />
              </div>
            ))
          ) : (
            <div>No hay mesas en tendencia</div>
          )}
        </div>
      </div>
    </>
  );
}
