"use server"
import { verify } from "jsonwebtoken";

export const ComprobarToken = async (token: string) => {
  if (token !== undefined) {
    try {
      const user = verify(token, process.env.AUTH_USER_TOKEN!);
      // Convertir el objeto user a JSON
      const usuarioJSON = JSON.stringify(user);
      const usuarioObjeto = JSON.parse(usuarioJSON);
      return {
        status: true,
        correoElectronico: usuarioObjeto.usuario.correoElectronico,
      };
    } catch (error) {
      return {
        status: false,
      };
    }
  }
  return {
    status: false,
  };
};
