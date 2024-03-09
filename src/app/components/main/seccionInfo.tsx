"use client"
import DivInfo from "./divInfo";

export default function SeccionInfo() {
  return (
    <section className="flex gap-10 w-3/4 justify-around border-2 border-colorBase p-10 m-10">
      <DivInfo
        datos={{
          numero: 29,
          texto: "Modelos de mesas",
        }}
      />
      <DivInfo
        datos={{
          numero: 10,
          texto: "Tipos de tapas",
        }}
      />
      <DivInfo
        datos={{
          numero: 20,
          texto: "Materiales diferentes",
        }}
      />
      <DivInfo
        datos={{
          numero: 100,
          texto: "Colores diferentes",
        }}
      />
      <DivInfo
        datos={{
          numero: 90,
          texto: "Modelos de sillas",
        }}
      />
    </section>
  );
}
