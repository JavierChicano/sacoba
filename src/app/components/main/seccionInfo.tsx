"use client"
import DivInfo from "./divInfo";

export default function SeccionInfo() {
  return (
    <section className="flex gap-10 w-3/4 justify-around border-2 border-colorBase p-10 mb-32">
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
    </section>
  );
}
