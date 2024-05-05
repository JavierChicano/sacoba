import { db } from ".";
import { usuarios } from "./schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Select usuario logueado
export async function selectComprobarUsuario(
  email: string,
  contraseña: string
) {
  try {
    // Realizar una consulta SQL para seleccionar el usuario con el correo electrónico dado
    const usuario = await db
      .select()
      .from(usuarios)
      .where(eq(usuarios.correoElectronico, email))
      .limit(1);

    if (usuario && usuario.length === 1) {
      const comparar = bcrypt.compareSync(contraseña, usuario[0].contraseña);
      if (comparar) {
        //Para pasar el usuario como objeto pero sin el campo contraseña
        const { contraseña, ...user } = usuario[0];
        // Crear el token de usuario
        const tokenGenerado = jwt.sign(
          {
            // El token expira en 7 días
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
            //Contiene la informacion del usuario
            usuario: user
          },
          process.env.AUTH_USER_TOKEN!
        );
        return {
          success: true,
          token: tokenGenerado,
        };
      } else {
        //La contraseña no es valida
        return false;
      }
    } else {
      // Si no se encontró un usuario, devolver false
      return false;
    }
  } catch (error: any) {
    //Si salta un error en la consulta
    return false;
  }
}
