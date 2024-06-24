import { useEffect, useState } from "react";
import { LeerDatosPedidos } from "./leerDatosPedidos";
import { TipoPedido } from "../../../../tipos/tipos";
import MostrarPedido from "./mostrarPedido";
import Link from "next/link";

export default function CajaPedidos({
  correoElectronico,
}: {
  correoElectronico: string | undefined;
}) {
  const [pedidos, setPedidos] = useState<TipoPedido[]>();
  const [pedidosVacio, setPedidosVacio] = useState(false);

  const obtenerPedidos = async () => {
    try {
      if (correoElectronico !== undefined) {
        const consulta = await LeerDatosPedidos({correoElectronico});

        if (consulta.status) {
          setPedidos(consulta.pedidos);
          if (consulta.pedidos?.length === 0) {
            setPedidosVacio(true);
          }
        }
      }
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };

  useEffect(() => {
    obtenerPedidos();
  }, [correoElectronico]);

  return (
    <section className="flex flex-col gap-12 md:px-28">
      {pedidosVacio ? (
        <div className="text-2xl md:text-3xl flex w-full justify-center flex-col text-center gap-6">
          <h1>No tiene pedidos, realice su primera compra</h1>
          <Link
            href={"/#productos"}
            className="border border-colorBase p-4 w-64 cursor-pointer self-center hover:bg-colorBaseSecundario"
          >
            Ver productos
          </Link>
        </div>
      ) : (
        <div>
          {pedidos ? (
            pedidos.map((pedido, index) => (
              <MostrarPedido key={index} pedido={pedido} />
            ))
          ) : (
            <p>Cargando pedidos...</p>
          )}
        </div>
      )}
    </section>
  );
}
