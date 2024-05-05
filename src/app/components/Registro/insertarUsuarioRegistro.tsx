"use server";
import { registrarUsuario } from "@/db/inserts";
import { FormRegistroValidation } from "../../../../tipos/tiposForm";
import bcrypt from "bcrypt"
import { TipoUsuario } from "../../../../tipos/tipos";
import { setCookie } from "cookies-next"

export const InsertarRegistro = async (usuario: TipoUsuario) => {
  const result = FormRegistroValidation.safeParse(usuario);

  if (!result.success) {
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    return {
      error: errorMessage,
    };
  }

  try {
    const constraseñaHasheada = await bcrypt.hash(result.data.contraseña, 10)
    const usuario = {
      usuario: {
        correoElectronico: result.data.correoElectronico,
        nombre: result.data.nombre,
        apellidos: result.data.apellidos,
        contraseña: constraseñaHasheada,
      },
    };
    const insercionExitosa = await registrarUsuario(usuario);

    // Si 'registrarUsuario' devuelve true, consideramos que la inserción fue exitosa
    if (insercionExitosa.success) {
      // Si llegamos aquí, la inserción fue exitosa
      return {
        success: true,
        token: insercionExitosa.token
      };
    } else {
      // Si 'registrarUsuario' devuelve false, consideramos que hubo un error
      return {
        error:
          "El correo electrónico ya está registrado. Por favor, utiliza otro correo electrónico.",
      };
    }
  } catch (error: any) {
    // Si hay un error en la operación de inserción por cualquier otra razón, lo manejamos aquí
    return {
      error: "Hubo un error al procesar la solicitud.",
    };
  }
};
