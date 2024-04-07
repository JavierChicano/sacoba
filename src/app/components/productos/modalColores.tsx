import React, { useEffect, useState } from "react";
import { TipoColor } from "../../../../tipos/tipos";
import DisplayColores from "./displaySeccionColores";

export default function ModalColores({ colores }: { colores: TipoColor[] }) {
    const [coloresPorModelo, setColoresPorModelo] = useState<{ [key: string]: TipoColor[] }>({});

    useEffect(() => {
        const coloresModelo: { [key: string]: TipoColor[] } = {};

        colores.forEach(color => {
            if (color.modelo in coloresModelo) {
                coloresModelo[color.modelo].push(color);
            } else {
                coloresModelo[color.modelo] = [color];
            }
        });

        setColoresPorModelo(coloresModelo);
    }, [colores]);

    return (
        <aside className="fixed h-full w-full bg-black/60 z-50 flex top-0 left-0 items-center justify-center">
            <section className="flex bg-fondo sm:h-4/5 sm:w-3/5 h-full w-full p-16 sm:p-20 flex-col overflow-y-scroll">
                {Object.entries(coloresPorModelo).map(([modelo, colores], index) => (
                    <DisplayColores key={index} colorModelo={[{ modelo, colores }]} />
                ))}
            </section>
        </aside>
    );
}
