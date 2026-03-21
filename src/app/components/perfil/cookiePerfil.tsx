"use server";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export const LeerDatosCookie = async () => {
  const cookieStore = await cookies();
  const clientToken = cookieStore.get("client-Token");

  if (clientToken !== undefined && clientToken.value !== undefined) {
    try {
      const user = verify(clientToken.value, process.env.AUTH_USER_TOKEN!);
      // Convertir el objeto user a JSON
      const usuarioJSON = JSON.stringify(user);
      const usuarioObjeto = JSON.parse(usuarioJSON);
      return {
        status: true,
        usuario: usuarioObjeto.usuario,
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
