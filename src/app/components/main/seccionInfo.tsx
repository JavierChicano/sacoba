"use client";
import { useEffect, useState } from "react";
import DivInfo from "./divInfo";
import { useInView } from "react-intersection-observer";

export default function SeccionInfo() {
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
    <section
      className="hidden lg:flex gap-10 w-3/4 justify-around border-2 border-colorBase p-10 mb-24 mt-10"
      ref={ref}
    >
      {isVisible && (
        <>
          <DivInfo
            datos={{
              numero: 29,
              texto: "Modelos de mesas",
            }}
          />
          <DivInfo
            datos={{
              numero: 31,
              texto: "Modelos de sillas",
            }}
          />
          <DivInfo
            datos={{
              numero: 5,
              texto: "Modelos de bancos",
            }}
          />
          <DivInfo
            datos={{
              numero: 9,
              texto: "Materiales diferentes",
            }}
          />
          <DivInfo
            datos={{
              numero: 266,
              texto: "Colores diferentes",
            }}
          />
        </>
      )}
    </section>
  );
}
