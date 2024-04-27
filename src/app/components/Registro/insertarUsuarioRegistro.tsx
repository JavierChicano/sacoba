"use server";
import { registrarUsuario } from "@/db/inserts";
import { FormRegistroValidation } from "../../../../tipos/tiposForm";

export const InsertarRegistro = async (nuevoRegistro: unknown) => {
  const result = FormRegistroValidation.safeParse(nuevoRegistro);

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
    const usuario = {
      usuario: {
        nombre: result.data.nombre,
        apellidos: result.data.apellidos,
        correoElectronico: result.data.email,
        contraseña: result.data.contraseña,
      },
    };
    const insercionExitosa = await registrarUsuario(usuario);

    // Si 'registrarUsuario' devuelve true, consideramos que la inserción fue exitosa
    if (insercionExitosa) {
      // Si llegamos aquí, la inserción fue exitosa
      return {
        success: true,
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
