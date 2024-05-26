import Link from "next/link";
import React from "react";

export default function RutaCarrito() {
  return (
    <div className="w-full lg:-mt-5 mb-5">
      <ul className="flex">
        <li className="text-gray-400">
          <Link href="/">Main</Link> |&nbsp;{" "}
        </li>
        <li>Carrito</li>
      </ul>
    </div>
  );
}
