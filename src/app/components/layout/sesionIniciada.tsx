"use server";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export const SesionIniciadaComprobacion = async () => {
  const clientToken = cookies().get("client-Token");

  if (clientToken !== undefined && clientToken.value !== undefined) {
    console.log("AQUI 2");

    try {
        verify(clientToken.value, process.env.AUTH_USER_TOKEN!);
      return {
        status: true,
      };
    } catch (error) {
      console.log("AQUI 4");
      return {
        status: false,
      };
    }
  }
  return {
    status: false,
  };
};
