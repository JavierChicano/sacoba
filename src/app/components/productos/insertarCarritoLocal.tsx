"use server";
import { registrarCarritoLocal } from "@/db/inserts";

export const InsertarCarritoLocal = async (producto: any) => {
  // Comprobar si la sesion esta iniciada
  try {
    const insercion = await registrarCarritoLocal({
      producto: producto,
    });
    console.log(insercion)
    if (insercion.success) {
      return {
        idGenerado: insercion.idGenerado,
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Hubo un error al procesar la solicitud.",
    };
  }
};
