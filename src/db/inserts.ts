import { TipoConsulta, TipoUsuario } from "../../tipos/tipos";
import { db } from "./index";
import { consultas, usuarios } from "./schema";
import jwt from "jsonwebtoken"

export async function registrarUsuario({ usuario }: { usuario: TipoUsuario }) {
  try {
    await db.insert(usuarios).values({
      correoElectronico: usuario.correoElectronico,
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      contraseña: usuario.contraseña,
    });
    // Crear el token de usuario
    const tokenGenerado = jwt.sign(
        {
          // El token expira en 7 días
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
          //Contiene la informacion del usuario
          usuario: {
            correoElectronico: usuario.correoElectronico,
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
          },
        },
        process.env.AUTH_USER_TOKEN!
      );

    // Si la inserción se realiza sin errores, devolvemos true
    return {
      success: true,
      token: tokenGenerado
    };
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    return {
        success: false
    };
  }
}

export async function registrarConsulta({
  consulta,
}: {
  consulta: TipoConsulta;
}) {
  try {
    await db.insert(consultas).values({
      correoElectronico: consulta.correoElectronico,
      nombre: consulta.nombre,
      motivo: consulta.motivo,
      consulta: consulta.consulta,
    });
    // Si la inserción se realiza sin errores, devolvemos true
    return true;
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    return false;
  }
}
