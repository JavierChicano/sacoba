import Link from "next/link";
import IzquierdaLogin from "../components/main/compLoginIzquierda";
import FormRegistro from "../components/main/formularioRegistro";

export default function Registro() {
  return (
    <main
      className="grid grid-cols-2 h-screen"
      style={{
        backgroundImage: "url('/fondos/prueba1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <IzquierdaLogin texto="¡Bienvenido a nuestra tienda!" />
      <section className="flex p-10 justify-center items-center">
        <div className="flex flex-col gap-5">
          <h3 className="text-xl">Disfruta de las ventajas de ser socio</h3>
          <h1 className="text-5xl font-bold">Crear una nueva cuenta</h1>
          <h4>
            ¿Ya eres socio?{" "}
            <Link href="/Login" className="text-colorBase underline">
              Inicia sesion
            </Link>
          </h4>
          <FormRegistro />
        </div>
      </section>
    </main>
  );
}
