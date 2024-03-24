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
      <section className="flex justify-between pt-10 pb-5 w-full">
        <h1 className="text-4xl">Tendencias</h1>
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
        style={{ scrollBehavior: "smooth" }}
        onScroll={handleScroll}
      >
        <div ref={contentRef} className="flex" style={{ minWidth: "100%" }}>
          {mesasTendencias.length > 0 ? (
            mesasTendencias.map((mesa) => (
              <div style={{ marginRight: "16px" }}>
                <TarjetaDisplayInfo
                  key={mesa.id}
                  datos={{
                    id: mesa.id,
                    modelo: mesa.modelo,
                    imagen: mesa.imagen,
                    tipoBase: mesa.tipoBase,
                    extension: mesa.extension,
                    tipoAmpliable: mesa.tipoAmpliable,
                    auxiliar: mesa.auxiliar,
                    materialTapa: mesa.materialTapa,
                    dimensiones: mesa.dimensiones,
                    altura: mesa.altura,
                    materialPata: mesa.materialPata,
                    colorPata: mesa.colorPata,
                    precio: mesa.precio,
                  }}
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
