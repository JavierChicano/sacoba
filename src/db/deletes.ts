import { db } from ".";
import { carrito, carritoLocal } from "./schema";
import { eq, inArray, lt } from "drizzle-orm";

export async function deleteProductoCarrito({ producto }: { producto: any }) {
  try {
    await db.delete(carrito).where(eq(carrito.id, producto.id));

    // Si el delete se realiza sin errores, devolvemos true
    return true;
  } catch (error) {
    console.log(error);
    // Si ocurre algún error, devolvemos false
    return false;
  }
}

export async function deleteProductoCarritoLocal({
  producto,
}: {
  producto: any;
}) {
  try {
    await db.delete(carritoLocal).where(eq(carritoLocal.id, producto.id));

    // Si el delete se realiza sin errores, devolvemos true
    return true;
  } catch (error) {
    console.log(error);
    // Si ocurre algún error, devolvemos false
    return false;
  }
}

export async function deleteProductoCarritoLocal2({ id }: { id: number }) {
  try {
    await db.delete(carritoLocal).where(eq(carritoLocal.id, id));
    // Si el delete se realiza sin errores, devolvemos true
    return true;
  } catch (error) {
    console.log(error);
    // Si ocurre algún error, devolvemos false
    return false;
  }
}

//Funcion periodica para limpiar el carritoLocal
export async function deletePeriodicoCarritoLocal({
  fecha,
}: {
  fecha: string;
}) {
  try {
    await db.delete(carritoLocal).where(lt(carritoLocal.fecha, fecha));

    // Si el delete se realiza sin errores, devolvemos true
    return true;
  } catch (error) {
    console.log(error);
    // Si ocurre algún error, devolvemos false
    return false;
  }
}

export async function deleteCarritoComprado(ids: [], tipoCliente: string) {
  try {
    if (tipoCliente === "logueado") {
      await db.delete(carrito).where(inArray(carrito.id, ids));
      console.log("Se ha borado el carro tocho");
    } else {
      await db.delete(carritoLocal).where(inArray(carritoLocal.id, ids));
      console.log("Se ha borado el carro local");
    }
    // Si el delete se realiza sin errores, devolvemos true
    return true;
  } catch (error) {
    console.log(error);
    // Si ocurre algún error, devolvemos false
    return false;
  }
}
