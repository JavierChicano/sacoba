import { useEffect, useState } from "react";
import { TipoPedido } from "../../../../tipos/tipos";
import MostrarProductoPedido from "./productos/productoPedido";
import {
  IconSquareRoundedChevronDown,
  IconSquareRoundedChevronUp,
} from "@tabler/icons-react";

export default function MostrarPedido({ pedido }: { pedido: TipoPedido }) {
  const [estado, setEstado] = useState("confirmado");
  const [desplegado, setDesplegado] = useState(false);
  const productos = JSON.parse(pedido.productos);

  useEffect(() => {
    if (pedido.entregado) {
      setEstado("entregado");
    } else {
      setEstado("confirmado");
    }
  }, [pedido.entregado]);

  const handleClick = () => {
    //Mostrar ventana modal
  };

  return (
    <article className="border-y border-colorBase py-4 flex flex-col gap-4">
      <aside className="grid grid-cols-2 md:flex md:justify-around items-center">
        <h1
          className={`${
            estado === "entregado"
              ? "text-colorBaseSecundario"
              : "text-green-500"
          }`}
        >
          Pedido {estado}
        </h1>
        <div className="hidden md:flex">
          Comprado online - {FormatDate(pedido.fecha)}
        </div>
        <button
          onClick={handleClick}
          className="p-2 px-4 bg-colorBase hover:bg-colorBaseSecundario hover:text-black"
        >
          Gestionar
        </button>
        <div className="cursor-pointer">
          <IconSquareRoundedChevronDown
            stroke={2}
            className={`${!desplegado ? "block" : "hidden"}`}
            onClick={() => setDesplegado(true)}
          />
          <IconSquareRoundedChevronUp
            stroke={2}
            className={`${desplegado ? "block" : "hidden"}`}
            onClick={() => setDesplegado(false)}
          />
        </div>
      </aside>
      {desplegado && (
        <>
          {productos.length > 0 ? (
            productos.map((producto: any, index: any) => (
              <MostrarProductoPedido key={index} producto={producto} />
            ))
          ) : (
            <p>Cargando productos...</p>
          )}
        </>
      )}
    </article>
  );
}

function FormatDate(fecha: string) {
  const fechaAcortada = fecha.split(" ")[0];
  return fechaAcortada;
}
