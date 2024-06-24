import { useEffect, useState } from "react";
import { LeerDatosPedidos } from "./leerDatosPedidos";
import { TipoPedido } from "../../../../tipos/tipos";
import MostrarPedido from "./mostrarPedido";

export default function CajaPedidos({
  correoElectronico,
}: {
  correoElectronico: string | undefined;
}) {
  const [pedidos, setPedidos] = useState<TipoPedido[]>();
  const [pedidosVacio, setPedidosVacio] = useState(false);

  const obtenerPedidos = async (correo: string) => {
    try {
      const consulta = await LeerDatosPedidos({ correoElectronico: correo });
      if (consulta.status) {
        console.log();
        setPedidos(consulta.pedidos);
        if (consulta.pedidos?.length === 0) {
          setPedidosVacio(true);
        }
      }
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };
  
  useEffect(() => {
    let parche;
    if (correoElectronico === undefined) {
      parche = "";
    } else {
      parche = correoElectronico;
    }
    obtenerPedidos(parche);
  }, []);

  return (
    <section className="flex flex-col gap-12 md:px-28">
      {pedidosVacio ? (
        <div>No tiene pedidos, realice su primera compra</div>
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
