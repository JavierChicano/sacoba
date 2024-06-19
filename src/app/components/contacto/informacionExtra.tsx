import Link from "next/link";

export default function InfoExtra() {
  return (
    <aside className="mt-10 max-w-7xl lg:grid lg:grid-cols-2 flex flex-col">
      <span></span>
      <div className="w-full flex justify-between gap-12 lg:-ml-14 whitespace-nowrap lg:flex-row flex-col px-20 lg:p-0">
        <section>
          <h1 className="text-4xl mb-2">Tienda física</h1>
          <p className="whitespace-normal">Av. de Fuenlabrada, 55, 28970 Humanes de Madrid, Madrid. España</p>
        </section>
        <section>
          <h1 className="text-4xl mb-2">Horarios</h1>
          <ul>
            <li>L-V: 9:00-13:30 | 17:00-20:00</li>
            <li>S: 10:00-13:30</li>
          </ul>
        </section>
        <section>
          <h1 className="text-4xl mb-2">Contacto</h1>
          <p className="text-colorBase cursor-pointer"><Link href="mailto:atencionCliente@sacoba.es">atencionCliente@sacoba.es</Link></p>
          <p>Teléfono: 916 04 96 04</p>
        </section>
      </div>
    </aside>
  );
}
