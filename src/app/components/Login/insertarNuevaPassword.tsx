"use server";
import { actualizarPasswordUsuario } from "@/db/updates";
import bcrypt from "bcrypt";

export const InsertarNuevaPassword = async ({
  correoElectronico,
  contraseña,
}: {
  correoElectronico: string;
  contraseña: string;
}) => {
  const constraseñaHasheada = await bcrypt.hash(contraseña, 10);

  try {
    const loginExitoso = await actualizarPasswordUsuario({
      correoElectronico: correoElectronico,
      contraseñaNueva: constraseñaHasheada,
    });
    if (loginExitoso.success) {
      return { success: true, token: loginExitoso.token };
    } else {
      return { success: false };
    }
  } catch (error) {
    // Manejar el error si ocurre algún problema
    return { success: false };
  }
};
