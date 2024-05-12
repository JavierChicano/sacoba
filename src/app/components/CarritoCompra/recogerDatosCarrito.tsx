"use server";

import { selectCarritoUsuario } from "@/db/selectsDinamicos";

export const RecogerDatosCarrito = async (usuario: string) => {
  try {
    const loginExitoso = await selectCarritoUsuario(usuario);
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
