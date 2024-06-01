import FormRegistro from "../components/Registro/formularioRegistro";
import Link from "next/link";
import CompoLogo from "../components/main/compLogoRegLog";

export default function Registro() {
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
        <div className="flex flex-col gap-5">
          <ul className="flex h-20">
            <li className="text-slate-600">
              <Link href="/">Main</Link> |&nbsp;
            </li>
            <li>Registro</li>
          </ul>
          <h3 className="text-xl">Disfruta de las ventajas de ser socio</h3>
          <h1 className="text-5xl font-bold">Crear una nueva cuenta</h1>
          <h4>
            ¿Ya eres socio?{" "}
            <Link
              href="/Login"
              className="text-colorBaseSecundario underline font-semibold"
            >
              Inicia sesion
            </Link>
          </h4>

          {/* Componente que gestiona el registro del usuario atraves de un form */}
          <FormRegistro />
        </div>
      </section>
    </main>
  );
}
