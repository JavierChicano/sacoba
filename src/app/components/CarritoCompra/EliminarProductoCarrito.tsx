"use server";

import { deleteProductoCarrito } from "@/db/deletes";

export const EliminarProductoCarrito = async (producto: any) => {
  try {
    const response = await deleteProductoCarrito({producto})
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
