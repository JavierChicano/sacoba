import React, { useEffect, useState } from "react";
import { TipoColor } from "../../../../../tipos/tipos";
import { IconSquareX } from "@tabler/icons-react";
import DisplayColoresBastidor from "./displayColoresBastidor";
import { useModalBastidor } from "../../../../../states/states";


export default function ModalColoresBastidor({ colores }: { colores: TipoColor[] }) {
  const [coloresPorModelo, setColoresPorModelo] = useState<{[key: string]: TipoColor[];  }>({});
  const {modalVisibleBastidor, setModalVisibleBastidor} = useModalBastidor();

  useEffect(() => {
    const coloresModelo: { [key: string]: TipoColor[] } = {};

    colores.forEach((color) => {
      if (color.modelo in coloresModelo) {
        coloresModelo[color.modelo].push(color);
      } else {
        coloresModelo[color.modelo] = [color];
      }
    });

    setColoresPorModelo(coloresModelo);
  }, [colores]);

  const closeModal = () => {
    setModalVisibleBastidor(false)
  };

  return (
    <aside
      className={
        modalVisibleBastidor
          ? "fixed h-full w-full bg-black/60 z-50 flex top-0 left-0 items-center justify-center "
          : "hidden"
      }
      onClick={closeModal}
    >
      <section
        className="flex bg-fondo sm:h-4/5 sm:w-3/5 h-full w-full p-16 sm:px-20 flex-col overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-5xl border-b border-colorBase flex justify-between">
          Acabados
          <IconSquareX
            stroke={2}
            size={38}
            className="self-end cursor-pointer"
            onClick={closeModal}
          />
        </h1>
        {Object.entries(coloresPorModelo).map(([modelo, colores], index) => (
          <DisplayColoresBastidor key={index} colorModelo={[{ modelo, colores }]} />
        ))}
      </section>
    </aside>
  );
}
