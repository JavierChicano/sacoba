"use server";

import { actualizarCantidadProductoCarrito, actualizarCantidadProductoCarritoLocal } from "@/db/updates";

export const ModificarCantidadProducto = async (
  productoConNuevaCantidad: any,
  modo: string
) => {
  try {
    if (modo === "local") {
      const response = await actualizarCantidadProductoCarritoLocal({
        producto: productoConNuevaCantidad,
      });
      if (response) {
        return true;
      } else {
        //Si la sesion no esta iniciada
        return false;
      }
    } else {
      const response = await actualizarCantidadProductoCarrito({
        producto: productoConNuevaCantidad,
      });
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
