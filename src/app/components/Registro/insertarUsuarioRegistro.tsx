"use server"
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
        contraseña: result.data.contraseña
      }
    };
    registrarUsuario(usuario);
  } catch (error) {
  }
};
