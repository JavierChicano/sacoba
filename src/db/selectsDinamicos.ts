import { db } from ".";
import { carrito, carritoLocal, usuarios } from "./schema";
import { eq, inArray } from "drizzle-orm";
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
            usuario: user,
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
export async function selectCarritoUsuario(email: string) {
  try {
    const carritoUsuario = await db
      .select()
      .from(carrito)
      .where(eq(carrito.cliente, email));
    //Comprobamos si hay registros
    if (carritoUsuario.length > 0) {
      return {
        success: true,
        carrito: carritoUsuario,
      };
    } else {
      return {
        success: false,
        message: "El carrito está vacio",
      };
    }
  } catch (error: any) {
    //Si salta un error en la consulta
    return {
      success: false,
    };
  }
}
export async function selectCarritoParaPedido(id: any[], tipoCliente: string) {
  console.log("ID Q RECIBE", id)
  console.log("TIPO ENVIO Q RECIBE", tipoCliente)
  try {
    if (tipoCliente === "logueado") {
      const carritoUsuario = await db
        .select()
        .from(carrito)
        .where(inArray(carrito.id, id));
      //Comprobamos si hay registros
      if (carritoUsuario.length > 0) {
        return {
          success: true,
          carrito: carritoUsuario,
        };
      } else {
        return {
          success: false,
          message: "El carrito está vacio",
        };
      }
    } else {
      const carritoUsuario = await db
        .select()
        .from(carritoLocal)
        .where(inArray(carritoLocal.id, id));
      //Comprobamos si hay registros
      if (carritoUsuario.length > 0) {
        return {
          success: true,
          carrito: carritoUsuario,
        };
      } else {
        return {
          success: false,
          message: "El carrito está vacio",
        };
      }
    }
  } catch (error: any) {
    //Si salta un error en la consulta
    console.log("ERROR consulta carro", error);
    return {
      success: false,
    };
  }
}

export async function selectCarritoUsuarioLocal(id: []) {
  try {
    const carritoUsuario = await db
      .select()
      .from(carritoLocal)
      .where(inArray(carritoLocal.id, id));
    //Comprobamos si hay registros
    if (carritoUsuario.length > 0) {
      return {
        success: true,
        carrito: carritoUsuario,
      };
    } else {
      return {
        success: false,
        message: "El carrito está vacio",
      };
    }
  } catch (error: any) {
    //Si salta un error en la consulta
    console.log("ERROR consulta carro local", error);
    return {
      success: false,
    };
  }
}

//Comprobar existencia email usuario
export async function selectComprobarCorreoElectronico(email: string) {
  try {
    // Realizar una consulta SQL para seleccionar el usuario con el correo electrónico dado
    const usuario = await db
      .select()
      .from(usuarios)
      .where(eq(usuarios.correoElectronico, email))
      .limit(1);

    //Comprobamos si hay resultados
    if (usuario && usuario.length === 1) {
      const tokenGenerado = jwt.sign(
        {
          // El token expira en 10 minutos
          exp: Math.floor(Date.now() / 1000) + 600,
          //Contiene la informacion del usuario
          usuario: {
            correoElectronico: usuario[0].correoElectronico,
          },
        },
        process.env.AUTH_USER_TOKEN!
      );
      return {
        success: true,
        token: tokenGenerado,
      };
    }
    //Si el user no existe
    return false;
  } catch (error: any) {
    //Si salta un error en la consulta
    return false;
  }
}
