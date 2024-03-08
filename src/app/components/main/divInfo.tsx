"use client"
import { useEffect, useState } from "react";

type DivInfoParams = {
  numero: number;
  texto: string;
};

export default function DivInfo({ datos }: { datos: DivInfoParams }) {
  const { numero, texto } = datos;
  const [numeroActual, setNumeroActual] = useState(0);

  useEffect(() => {
    let contador = 0;
    const intervalo = setInterval(() => {
      if (contador < numero) {
        setNumeroActual(contador);
        contador++;
      } else {
        clearInterval(intervalo);
      }
    }, 100); // Intervalo de tiempo en milisegundos

    return () => clearInterval(intervalo); // Limpiar el intervalo cuando el componente se desmonta
  }, [numero]); // Ejecutar el efecto cuando el valor de 'numero' cambie

  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl mb-4">{numero}</span>
      <p className="text-lg">{texto}</p>
    </div>
  );
}
