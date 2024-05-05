"use server";

import { selectComprobarUsuario } from "@/db/selectsDinamicos";
import { FormLoginValidation } from "../../../../tipos/tiposForm";

type usuario = {
  correoElectronico: string,
  contraseña: string
}
export const ComprobarUsuario = async (usuario: usuario) => {
  const result = FormLoginValidation.safeParse(usuario);
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
      result.data.correoElectronico,
      result.data.contraseña
    );
    if(loginExitoso){
        return{
            success: loginExitoso.success,
            token: loginExitoso.token
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
