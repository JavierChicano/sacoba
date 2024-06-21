"use server";
import { selectCarritoUsuarioLocal } from "@/db/selectsDinamicos";

export const RecogerDatosCarritoLocal = async (idProductos: []) => {
  try {
    const loginExitoso = await selectCarritoUsuarioLocal(idProductos);
    //Si el usuario es correcto y tiene productos en el carrito
    if (loginExitoso.success) {
      return {
        success: true,
        carrito: loginExitoso.carrito,
      };
    } else {
      // Si el usuario no es correcto o el carrito esta vacio
      return {
        success: false,
        message: loginExitoso.message,
      };
    }
  } catch (error) {
    // Manejar el error si ocurre algún problema
    return {
      success: false,
      message: "Hubo un error al procesar la solicitud.",
    };
  }
};
