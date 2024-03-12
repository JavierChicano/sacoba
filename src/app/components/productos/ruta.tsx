import Link from "next/link";
import React from "react";

export default function Ruta({ pagina }: { pagina: string }) {
  return (
    <div className="w-full py-10">
      <ul className="flex">
        <li className="text-gray-400">
          <Link href="/">Main</Link> |&nbsp;{" "}
        </li>
        <li className="text-gray-400"><Link href="/#productos">Productos</Link> |&nbsp; </li>
        <li>{pagina}</li>
      </ul>
    </div>
  );
}
