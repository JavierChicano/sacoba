import React from "react";

type SeccionExplicacionParams = {
    titulo: string;
    explicacionp1: string;
    explicacionp2: string;
  };
export default function SeccionExplicacion({ datos }: { datos: SeccionExplicacionParams }) {
    const { titulo, explicacionp1, explicacionp2 } = datos;
  
    return (
    <section className=" grid grid-cols-[1fr_2fr] gap-8">
      <div className="text-4xl border-r-2 border-colorBase flex items-center">{titulo}</div>
      <div className="flex flex-col gap-8">
        <p>{explicacionp1}</p>
        <p>{explicacionp2}</p></div>
    </section>
  );
}
