"use server";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export const SesionIniciadaComprobacion = async () => {
  const clientToken = cookies().get("client-Token");

  if (clientToken !== undefined && clientToken.value !== undefined) {
    try {
        verify(clientToken.value, process.env.AUTH_USER_TOKEN!);
      return {
        status: true,
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
