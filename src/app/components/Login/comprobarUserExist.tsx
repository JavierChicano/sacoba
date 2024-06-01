"use server";
import { selectComprobarCorreoElectronico } from "@/db/selectsDinamicos";

export const ComprobarUserExist = async (correoElectronico: string) => {
  try {
    const loginExitoso = await selectComprobarCorreoElectronico(correoElectronico);
    if (loginExitoso) {
      return {
        success: loginExitoso.success,
        emailData: {
          correoElectronico: correoElectronico,
          token: loginExitoso.token,
        } 
      };
    } else {
      // Si 'ComprobarCorreoElectronico' devuelve false, consideramos que hubo un error
        return {
        error: "El correo electronico no existe, pruebe a registrarse",
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
