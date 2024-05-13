"use server";

import { actualizarCantidadProductoCarrito } from "@/db/updates";

export const ModificarCantidadProducto = async (productoConNuevaCantidad: any) => {
  try {
    const response = await actualizarCantidadProductoCarrito({producto: productoConNuevaCantidad})
    if(response){
        return true
    }else{
        //Si la sesion no esta iniciada
        return false
    }
  } catch (error) {
    // Manejar el error si ocurre algún problema
    console.log(error);
    return false
  }
};
