"use server";
import { registrarUsuario } from "@/db/inserts";
import { FormCuentaValidation } from "../../../../tipos/tiposForm";
import { actualizarUsuario } from "@/db/updates";

export const InsertarUserData = async (nuevoRegistro: unknown) => {
  const result = FormCuentaValidation.safeParse(nuevoRegistro);

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
        correoElectronico: result.data.correoElectronico,
        nombre: result.data.nombre,
        apellidos: result.data.apellidos,
        telefono: result.data.telefono,
        domicilio: result.data.domicilio,
        cp: result.data.cp,
        provincia: result.data.provincia,
      },
    };
    const insercionExitosa = await actualizarUsuario(usuario);

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
          "Error en la recogida de datos",
      };
    }
  } catch (error: any) {
    // Si hay un error en la operación de inserción por cualquier otra razón, lo manejamos aquí
    return {
      error: "Hubo un error al procesar la solicitud.",
    };
  }
};
