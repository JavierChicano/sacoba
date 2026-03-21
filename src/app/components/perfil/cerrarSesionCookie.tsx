"use server";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function LogOut() {
  const cookieStore = await cookies();
  const clientToken = cookieStore.get("client-Token");

  if (clientToken !== undefined && clientToken.value !== undefined) {
    try {
      //Simplemente con pasar la validacion nos vale, ya que no queremos la info
      verify(clientToken.value, process.env.AUTH_USER_TOKEN!);
      cookieStore.delete("client-Token");
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
