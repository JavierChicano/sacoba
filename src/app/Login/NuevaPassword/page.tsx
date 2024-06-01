"use client";
import CompoLogo from "@/app/components/main/compLogoRegLog";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ComprobarToken } from "@/app/components/Login/comprobarToken";
import FormNuevaPassword from "@/app/components/Login/formNuevaPassword";
import { useEffect, useState } from "react";

interface ResetearPasswordProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
export default function ResetearPassword({
  searchParams,
}: ResetearPasswordProps) {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [tokenNoValido, setTokenNoValido] = useState(false);

  useEffect(() => {
    //Si existe el token
    if (searchParams.token) {
      const token = searchParams.token.toString();
      ComprobarTokenURl(token);
    } else {
      //Si no hay un token en la URL, redirigimos
      redirect("/Login/RecuperarPassword");
    }
  }, []);

  //Funcion asyncrona
  const ComprobarTokenURl = async (token: string) => {
    //Verificamos la veracidad del token
    const response = await ComprobarToken(token);
    if (!response.status) {
      //Si el token no es válido
      setTokenNoValido(true);
    } else {
      //Si el token es correcto
      setCorreoElectronico(response.correoElectronico);
    }
  };

  return (
    <main className="relative grid grid-cols-2 h-screen">
      <div
        className="absolute inset h-screen w-full hidden md:block"
        style={{
          backgroundImage: "url('/fondos/prueba1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <CompoLogo />
      {!tokenNoValido ? (
        <section className="flex p-10 justify-center items-center col-span-2 sm:col-span-1 text-contraste md:text-black z-10 bg-fondo md:bg-transparent">
          <div className="flex flex-col gap-5 max-w-lg w-full">
            <ul className="flex h-20">
              <li className="text-slate-600">
                <Link href="/">Main</Link> |&nbsp;{" "}
              </li>
              <li className="text-slate-600">
                <Link href="/Login">Login</Link> |&nbsp;{" "}
              </li>
              <li>Nueva contraseña</li>
            </ul>
            <h1 className="text-4xl font-bold text-nowrap">Nueva contraseña</h1>
            <section className="max-w-md flex flex-col gap-5 w-full">
              <h4>Introduce tu nueva contraseña</h4>
              <FormNuevaPassword correoElectronico={correoElectronico} />
            </section>
          </div>
        </section>
      ) : (
        <div className="flex text-4xl h-screen justify-center items-center text-red-600">
          El token no es válido o ha caducado
        </div>
      )}
    </main>
  );
}
