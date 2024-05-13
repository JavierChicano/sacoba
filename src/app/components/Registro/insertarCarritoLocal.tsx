"use server";

import { registrarCarrito } from "@/db/inserts";

export const InsertarCarritoExistente = async (
  carrito: any,
  usuario: string
) => {
  try {
    const insercionExitosa = await registrarCarrito({
      producto: carrito,
      correo: usuario,
    });
    if (insercionExitosa) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    // Si hay un error en la operación de inserción por cualquier otra razón, lo manejamos aquí
    return false;
  }
};
