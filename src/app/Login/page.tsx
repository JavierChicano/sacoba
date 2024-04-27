import Link from "next/link";
import FormLogin from "../components/Login/formularioLogin";
import CompoLogo from "../components/main/compLogoRegLog";

export default function Login() {
  return (
    <main
      className="grid grid-cols-2 h-screen bg-[#2e3138]"
      style={{
        backgroundImage: "url('/fondos/prueba1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CompoLogo />
      <section className="flex p-10 items-center justify-center col-span-2 sm:col-span-1 text-black">
        <div className="flex flex-col gap-5 max-w-lg w-full">
          <ul className="flex h-20">
            <li className="text-slate-600">
              <Link href="/">Main</Link> |&nbsp;{" "}
            </li>
            <li>Login</li>
          </ul>
          <h1 className="text-5xl font-bold">Inicia sesión</h1>
          <h4>
            ¿No tienes cuenta?{" "}
            <Link href="/Registro" className="text-colorBaseSecundario underline font-semibold">
              Registrate
            </Link>
          </h4>
          <FormLogin />
        </div>
      </section>
    </main>
  );
}
