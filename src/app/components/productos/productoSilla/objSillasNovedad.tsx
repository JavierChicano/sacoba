"use client"
import { useState, useRef } from "react";
import { cn } from "@nextui-org/react";
import { TipoSilla } from "../../../../../tipos/tipos";
import IconArrowIzquierda from "../../iconos/iconoFlechaIzq";
import IconArrowDerecha from "../../iconos/iconoFlechaDer";
import TarjetaDisplayInfoSilla from "./tarjetaDisplayInfoSilla";

export default function ObjSillasNovedades({
  sillasTendencia,
}: {
  sillasTendencia: TipoSilla[];
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
        <h1 className="text-3xl lg:text-4xl">Novedades</h1>
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
        <div ref={contentRef} className="flex w-screen">
          {sillasTendencia.length > 0 ? (
            sillasTendencia.map((silla) => (
              <div style={{ marginRight: "16px" }} key={silla.id}>
                <TarjetaDisplayInfoSilla datos={silla} />
              </div>
            ))
          ) : (
            <div>No hay sillas en tendencia</div>
          )}
        </div>
      </div>
    </>
  );
}
