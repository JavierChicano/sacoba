"use server";

import { selectComprobarUsuario } from "@/db/selects";
import { FormLoginValidation } from "../../../../tipos/tiposForm";
import { usuarios } from "@/db/schema";

export const ComprobarUsuario = async (nuevoRegistro: unknown) => {
  const result = FormLoginValidation.safeParse(nuevoRegistro);
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
    const loginExitoso = await selectComprobarUsuario(
      result.data.email,
      result.data.contraseña
    );
    if(loginExitoso){
        return{
            success: loginExitoso.success,
            usuario: loginExitoso.usuario
        }
    }else {
        // Si 'registrarUsuario' devuelve false, consideramos que hubo un error
        return {
          error:
            "El correo electronico o la contraseña, no son válidos",
        };
    }
  } catch (error) {
    // Manejar el error si ocurre algún problema
    console.log(error);
    return {
      error: "Hubo un error al procesar la solicitud.",
    };
  }
};
