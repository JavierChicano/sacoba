import { eq } from "drizzle-orm";
import { db } from ".";
import { TipoUsuarioExtended } from "../../tipos/tipos";
import { carrito, carritoLocal, usuarios } from "./schema";
import jwt from "jsonwebtoken";

export async function actualizarUsuario({
  usuario,
}: {
  usuario: TipoUsuarioExtended;
}) {
  try {
    await db
      .update(usuarios)
      .set({
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        telefono: usuario.telefono,
        domicilio: usuario.domicilio,
        cp: usuario.cp,
        provincia: usuario.provincia,
      })
      .where(eq(usuarios.correoElectronico, usuario.correoElectronico));

    // Generar un nuevo token de usuario
    const tokenGenerado = jwt.sign(
      {
        // El token expira en 7 días
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
        //Contiene la informacion del usuario
        usuario: {
          correoElectronico: usuario.correoElectronico,
          nombre: usuario.nombre,
          apellidos: usuario.apellidos,
          telefono: usuario.telefono,
          domicilio: usuario.domicilio,
          cp: usuario.cp,
          provincia: usuario.provincia,
        },
      },
      process.env.AUTH_USER_TOKEN!
    );
    // Si la inserción se realiza sin errores, devolvemos true
    return {
      success: true,
      token: tokenGenerado,
    };
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    return {
      success: false,
    };
  }
}

//Actualizar carrito
export async function actualizarCantidadProductoCarrito({
  producto,
}: {
  producto: any;
}) {
  try {
    await db
      .update(carrito)
      .set({
        detallesProducto: JSON.stringify(producto),
      })
      .where(eq(carrito.id, producto.id));
    // Si la inserción se realiza sin errores, devolvemos true
    return true;
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    return false;
  }
}
export async function actualizarCantidadProductoCarritoLocal({
  producto,
}: {
  producto: any;
}) {
  try {
    await db
      .update(carritoLocal)
      .set({
        detallesProducto: JSON.stringify(producto),
      })
      .where(eq(carritoLocal.id, producto.id));
    // Si la inserción se realiza sin errores, devolvemos true
    return true;
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    return false;
  }
}


export async function actualizarPasswordUsuario({
  correoElectronico,
  contraseñaNueva,
}: {
  correoElectronico: string;
  contraseñaNueva: string;
}) {
  try {
    //Consulta que update la contraseña
    await db
      .update(usuarios)
      .set({
        contraseña: contraseñaNueva,
      })
      .where(eq(usuarios.correoElectronico, correoElectronico));

    //Consulta que coge los datos del usuario
    const usuarioActualizado = await db
      .select()
      .from(usuarios)
      .where(eq(usuarios.correoElectronico, correoElectronico));

    const { contraseña, ...user } = usuarioActualizado[0];

    // Generar un nuevo token de usuario
    const tokenGenerado = jwt.sign(
      {
        // El token expira en 7 días
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
        //Contiene la informacion del usuario
        usuario: user,
      },
      process.env.AUTH_USER_TOKEN!
    );

    // Si la inserción se realiza sin errores, devolvemos true
    return {
      success: true,
      token: tokenGenerado,
    };
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    return { success: false };
  }
}
