"use server";

import {
  deleteProductoCarrito,
  deleteProductoCarritoLocal,
} from "@/db/deletes";

export const EliminarProductoCarrito = async (producto: any, modo: string) => {
  try {
    if (modo === "local") {
      const response = await deleteProductoCarritoLocal({ producto });
      if (response) {
        return true;
      } else {
        //Si la sesion no esta iniciada
        return false;
      }
    } else {
      const response = await deleteProductoCarrito({ producto });
      if (response) {
        return true;
      } else {
        //Si la sesion no esta iniciada
        return false;
      }
    }
  } catch (error) {
    // Manejar el error si ocurre algún problema
    console.log(error);
    return false;
  }
};
