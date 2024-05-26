import Link from "next/link";
import React from "react";

export default function RutaSillaConcreta() {
  return (
    <div className="w-full col-span-2">
      <ul className="flex">
        <li className="text-gray-400">
          <Link href="/">Main</Link> |&nbsp;{" "}
        </li>
        <li className="text-gray-400">
          <Link href="/#productos">Productos</Link> |&nbsp;{" "}
        </li>
        <li className="text-gray-400">
          <Link href="/ProductoSilla/">Sillas</Link> |&nbsp;{" "}
        </li>
        <li>Silla seleccionada</li>
      </ul>
    </div>
  );
}
