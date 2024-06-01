import FormRecuperarContraseña from "@/app/components/Login/formRecuperarPassword";
import CompoLogo from "@/app/components/main/compLogoRegLog";
import Link from "next/link";

export default function RecuperarContraseña() {
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
          <h1 className="text-4xl font-bold md:text-nowrap">
            Recuperar contraseña
          </h1>
          <section className="max-w-md flex flex-col gap-5 w-full">

          <h4>
            Introduce el correo electronico asociado a tu cuenta de Sacoba y te
            enviaremos un enlace para restablecer tu contraseña.
          </h4>
          <FormRecuperarContraseña/>
          </section>
        </div>
      </section>
    </main>
  );
}
