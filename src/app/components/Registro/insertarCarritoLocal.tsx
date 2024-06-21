"use server";

import { juntarAmbosCarritos } from "@/db/inserts";

export const InsertarCarritoExistente = async (
  carritoIds: any,
  usuario: string
) => {
  try {
    const insercionExitosa = await juntarAmbosCarritos({
      carritoIds: carritoIds,
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
