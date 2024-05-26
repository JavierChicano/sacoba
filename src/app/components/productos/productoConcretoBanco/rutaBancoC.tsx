import Link from "next/link";
import React from "react";

export default function RutaBancoConcreto() {
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
          <Link href="/ProductoBanco/">Bancos</Link> |&nbsp;{" "}
        </li>
        <li>Banco seleccionado</li>
      </ul>
    </div>
  );
}
