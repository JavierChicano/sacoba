"use server";

import { registrarConsulta } from "@/db/inserts";
import { FormConsultaValidation } from "../../../../tipos/tiposForm";

export const InsertarConsulta = async (nuevoRegistro: unknown) => {
  const result = FormConsultaValidation.safeParse(nuevoRegistro);

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
    const consulta = {
      consulta: {
        correoElectronico: result.data.correoElectronico,
        nombre: result.data.nombre,
        motivo: result.data.motivo,
        consulta: result.data.consulta,
      },
    };
    const insercionExitosa = await registrarConsulta(consulta);

    // Si 'registrarUsuario' devuelve true, consideramos que la inserción fue exitosa
    if (insercionExitosa) {
      // Si llegamos aquí, la inserción fue exitosa
      return {
        success: true,
      };
    } else {
      // Si 'registrarUsuario' devuelve false, consideramos que hubo un error
      return {
        error: "Ha sucedido un fallo al registrar la consulta",
      };
    }
  } catch (error: any) {
    // Si hay un error en la operación de inserción por cualquier otra razón, lo manejamos aquí
    return {
      error: "Hubo un error al procesar la solicitud.",
    };
  }
};
