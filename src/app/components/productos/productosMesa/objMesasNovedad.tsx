"use client"
import { useState, useRef } from "react";
import { cn } from "@nextui-org/react";
import TarjetaDisplayInfo from "./tarjetaDisplayInfo";
import { TipoMesa } from "../../../../../tipos/tipos";
import IconArrowIzquierda from "../../iconos/iconoFlechaIzq";
import IconArrowDerecha from "../../iconos/iconoFlechaDer";

export default function ObjMesasNovedades({
  mesasNovedad,
}: {
  mesasNovedad: TipoMesa[];
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
      <section className="flex justify-between pt-10 pb-5 w-full">
        <h1 className="text-4xl">Novedades</h1>
        <span className="flex items-center gap-1">
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
          "max-w-7xl flex flex-row gap-4 pb-2",
          "overflow-x-scroll"
        )}
        style={{ scrollBehavior: "smooth"}}
        onScroll={handleScroll}
      >
        <div ref={contentRef} className="flex" style={{ minWidth: "100%" }}>
          {mesasNovedad.length > 0 ? (
            mesasNovedad.map((mesa) => (
              <div style={{ marginRight: "16px" }}>
                <TarjetaDisplayInfo
                  datos={mesa}
                />
              </div>
            ))
          ) : (
            <div>No hay mesas nuevas</div>
          )}
        </div>
      </div>
    </>
  );
}
