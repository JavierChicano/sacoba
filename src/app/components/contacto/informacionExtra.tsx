import Link from "next/link";

export default function InfoExtra() {
  return (
    <aside className="mt-10 max-w-7xl grid grid-cols-2">
      <span></span>
      <div className="w-full flex justify-between gap-12 -ml-14 whitespace-nowrap">
        <section>
          <h1 className="text-4xl mb-2">Tienda física</h1>
          <p className="whitespace-normal">Av. de Fuenlabrada, 55, 28970 Humanes de Madrid, Madrid</p>
        </section>
        <section>
          <h1 className="text-4xl mb-2">Horarios</h1>
          <ul>
            <li>L-V: 9:00-13:00 | 16:00-20:00</li>
            <li>S: 10:00-13:00</li>
          </ul>
        </section>
        <section>
          <h1 className="text-4xl mb-2">Contacto</h1>
          <p className="text-colorBase cursor-pointer"><Link href="mailto:atencionCliente@sacoba.es">atencionCliente@sacoba.es</Link></p>
        </section>
      </div>
    </aside>
  );
}
