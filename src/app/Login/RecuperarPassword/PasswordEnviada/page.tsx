import FormRecuperarContraseña from "@/app/components/Login/formRecuperarPassword";
import CompoLogo from "@/app/components/main/compLogoRegLog";
import Link from "next/link";

export default function ContraseñaEnviada() {
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
      <section className="flex p-10 justify-center items-center col-span-2 sm:col-span-1 text-contraste md:text-black z-10 bg-fondo md:bg-transparent">
        <div className="flex flex-col gap-5 max-w-lg w-full">
          <ul className="flex h-20">
            <li className="text-slate-600">
              <Link href="/">Main</Link> |&nbsp;{" "}
            </li>
            <li className="text-slate-600">
              <Link href="/Login">Login</Link> |&nbsp;{" "}
            </li>
            <li>Recuperar contraseña</li>
          </ul>
          <h1 className="text-3xl font-bold">
            Te hemos enviado un correo con instrucciones para recuperar tu
            contraseña
          </h1>
          <section className="max-w-md flex flex-col gap-3 w-full">
            <p>
              ¡Empecemos! Revisa tu correo electrónico y haz clic en el enlace
              para confirmar.
            </p>
            <p>
              Si no encuentras el mensaje en tu bandeja de entrada, podrías
              revisar la carpeta de correo no deseado (spam).
            </p>
            <p>
              Ten presente que el enlace será válido por 10 minutos desde el
              momento en que lo recibas.
            </p>
            <p>
              Si aún tienes preguntas sobre el proceso, no dudes en contactárnos
            </p>
            <Link
              href="/Login"
              className="text-colorBaseSecundario underline font-semibold"
            >
              Volver a iniciar sesión
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
