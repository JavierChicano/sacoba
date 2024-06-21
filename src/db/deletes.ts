import { db } from ".";
import { carrito, carritoLocal } from "./schema";
import { eq } from "drizzle-orm";

export async function deleteProductoCarrito({producto}:{producto: any}) {
    try {
        await db
        .delete(carrito)
        .where(eq(carrito.id, producto.id));

      // Si el delete se realiza sin errores, devolvemos true
      return true;
    } catch (error) {
        console.log(error)
      // Si ocurre algún error, devolvemos false
      return false;
    }
  }
  
  export async function deleteProductoCarritoLocal({producto}:{producto: any}) {
    try {
        await db
        .delete(carritoLocal)
        .where(eq(carritoLocal.id, producto.id));

      // Si el delete se realiza sin errores, devolvemos true
      return true;
    } catch (error) {
        console.log(error)
      // Si ocurre algún error, devolvemos false
      return false;
    }
  }
  