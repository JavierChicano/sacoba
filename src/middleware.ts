import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const clientToken = cookies().get("client-Token");
  //Si el usuario se dirige a "Perfil"
  if (request.nextUrl.pathname.includes("/Perfil")) {
    if (clientToken === undefined) {
      //Esto se hace si no esta iniciado sesion (sin cookie)
      return NextResponse.redirect(new URL("/Login", request.url));
    } else {
      try {
        const { payload } = await jwtVerify(clientToken.value, new TextEncoder().encode(process.env.AUTH_USER_TOKEN!));
        //Si el usuario tiene un token valido le dejamos pasar
        return NextResponse.next();
      } catch (error) {
        //Redireccionamos si el token no es válido
        return NextResponse.redirect(new URL("/Login", request.url));
      }
    }
  }
  //Dejamos pasar si la pagina no coindide con las filtradas
  return NextResponse.next();
}
//Proteger varias rutas de la misma manera
// export const config = {
//   matcher: "/perfil",
// };
