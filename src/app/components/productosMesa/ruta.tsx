import Link from "next/link";
import React from "react";

export default function Ruta() {
  return (
    <div className="w-full px-20 py-10">
      <ul className="flex">
        <li className="text-gray-400">
          <Link href="/">Main</Link> |&nbsp;{" "}
        </li>
        <li className="text-gray-400"><Link href="/#productos">Productos</Link> |&nbsp; </li>
        <li>Mesas</li>
      </ul>
    </div>
  );
}
