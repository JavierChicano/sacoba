"use client"
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
    let contador = 0;
    let intervalo: Intervalo;

    const faseRapida = () => {
      intervalo = setInterval(() => {
        if (contador < Math.min(numero, (numero-5))) {
          setNumeroActual(contador);
          contador += 1;
        } else {
          clearInterval(intervalo);
          faseLenta();
        }
      }, 50) ;
    };

    const faseLenta = () => {
      intervalo = setInterval(() => {
        if (contador <= numero) {
          setNumeroActual(contador);
          contador++;
        } else {
          clearInterval(intervalo);
        }
      }, 500);
    };

    faseRapida();

    return () => clearInterval(intervalo);
  }, [numero]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl mb-4">{numeroActual}</span>
      <p className="text-lg">{texto}</p>
    </div>
  );
}
