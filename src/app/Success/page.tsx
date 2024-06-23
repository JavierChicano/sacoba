import Image from "next/image";
import Link from "next/link";

export default function Success() {
  return (
    <main className="flex flex-col items-center w-full md:gap-10 gap-6 text-xl md:text-2xl text-center">
      <aside>
        <Image
          className="w-12 md:w-20"
          src="/exitoso.png"
          alt="Mesa del main"
          width={75}
          height={75}
        />
      </aside>
      <h1 className="text-xl md:text-4xl">Tu pedido se ha procesado con éxito</h1>
      <h3 className="text-base md:text-2xl">¡Gracias por tu compra!</h3>
      <section className="flex gap-4 flex-col md:flex-row">
        <Link href={"/Perfil/pedidos"} className="bg-colorBase p-4 w-80 hover:scale-105 cursor-pointer">Ver mis pedidos</Link>
        <Link href={"/#productos"} className="border border-colorBase p-4 w-80 hover:scale-105 cursor-pointer">Seguir comprando</Link>
      </section>
      <aside className="text-base md:text-xl flex flex-col gap-4 max-w-2xl p-2">
        <h2>Encontrarás la factura en tu correo electronico</h2>
        <h2>
          Te informaremos por correo electronico, cuando el pedido este listo
          para recoger en tienda o ser montado en tu domicilio
        </h2>
      </aside>
    </main>
  );
}
