"use client";
import { useEffect, useState } from "react";

type DivInfoParams = {
  numero: number;
  texto: string;
};
type Intervalo = ReturnType<typeof setInterval>;

export default function DivInfo({ datos }: { datos: DivInfoParams }) {
  const { numero, texto } = datos;
  const [numeroActual, setNumeroActual] = useState(0);

  useEffect(() => {
    let contador = numero > 200 ? 200 : 0; 
    let intervalo: Intervalo;

    const inicioConteo = contador;
    const tiempoTotal = Math.min(Math.abs(numero - contador) / 20, 5000); // Máximo de 3 segundos
    const pasos = Math.ceil(Math.abs(numero - contador) / ((tiempoTotal / 1000) * 20));
    const intervaloTiempo = (tiempoTotal / pasos) * 1000;

    const avance = (numero - inicioConteo) / pasos;

    intervalo = setInterval(() => {
      if (Math.abs(numero - contador) > avance) {
        contador += avance;
        setNumeroActual(contador)
      } else {
        setNumeroActual(numero); // Asegurarse de que el número final sea exacto
        clearInterval(intervalo);
      }
    }, intervaloTiempo);

    return () => clearInterval(intervalo);
  }, [numero]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl mb-4">{numeroActual.toFixed(0)}</span>
      <p className="text-lg">{texto}</p>
    </div>
  );
}
