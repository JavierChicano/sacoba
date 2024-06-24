"use server";

import { selectPedidosUsuario } from "@/db/selectsDinamicos";

export const LeerDatosPedidos = async ({
  correoElectronico,
}: {
  correoElectronico: string;
}) => {
  try {
    const pedidos = await selectPedidosUsuario(correoElectronico);
    if (pedidos.success) {
      return {
        status: true,
        pedidos: pedidos.pedidos,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    return {
      status: false,
    };
  }
};
