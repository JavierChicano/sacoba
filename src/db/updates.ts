import { eq } from "drizzle-orm";
import { db } from ".";
import { TipoUsuarioExtended } from "../../tipos/tipos";
import { usuarios } from "./schema";
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
