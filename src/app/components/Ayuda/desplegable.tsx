"use client";
import { IconSquareRoundedArrowDown, IconSquareRoundedArrowUp } from "@tabler/icons-react";
import { useState } from "react";

export default function Desplegable({
  pregunta,
  respuesta,
}: {
  pregunta: string;
  respuesta: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="w-full border-b border-colorBaseSecundario text-3xl py-5 text-left">
        <div className="flex justify-between cursor-pointer" onClick={toggleOpen}>
          <h1>{pregunta}</h1>
          {!isOpen ? <IconSquareRoundedArrowDown size={35} /> :  <IconSquareRoundedArrowUp size={35} />}
        </div>
        <div className={`content ${isOpen ? "open" : "closed"}`}>
          <p className="text-xl mt-5">{respuesta}</p>
        </div>
      </section>
      <style jsx>{`
        .content {
          transition-property: max-height, opacity;
          overflow: hidden;
        }
        .open {
          transition-duration: 0.5s, 0.5s;
          max-height: 100vh;
          opacity: 1;
        }
        .closed {
          transition-duration: 0.2s, 0.2s;
          max-height: 0;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
