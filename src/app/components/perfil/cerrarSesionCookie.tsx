"use server";
import { deleteCookie, setCookie } from "cookies-next";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function LogOut() {
  const clientToken = cookies().get("client-Token");

  if (clientToken !== undefined && clientToken.value !== undefined) {
    try {
      //Simplemente con pasar la validacion nos vale, ya que no queremos la info
      verify(clientToken.value, process.env.AUTH_USER_TOKEN!);
      cookies().delete("client-Token");
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
}
