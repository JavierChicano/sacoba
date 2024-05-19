import Link from "next/link";

export default function Outlet() {
  return (
    <main className="flex flex-col items-center">
      <section className="max-w-7xl w-full flex flex-col gap-8 text-center h-[60vh] justify-center">
        <h1 className="text-5xl">Disponible próximamente</h1>
        <h1>
          Para mas información contáctenos{" "}
          <p className="text-colorBase cursor-pointer"><Link href="mailto:atencionCliente@sacoba.es">atencionCliente@sacoba.es</Link></p>
        </h1>
        <h1>
          O visite nuestra tienda{" "}
          <span className="italic">Av. de Fuenlabrada, 55, 28970 Humanes de Madrid, Madrid</span>
        </h1>
      </section>
    </main>
  );
}
