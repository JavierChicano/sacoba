import Link from "next/link";
import React from "react";

export default function RutaPerfil() {
  return (
    <div className="w-full py-10">
      <ul className="flex">
        <li className="text-gray-400">
          <Link href="/">Main</Link> |&nbsp;{" "}
        </li>
        <li>Perfil</li>
      </ul>
    </div>
  );
}
