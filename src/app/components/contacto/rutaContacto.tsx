import Link from "next/link";
import React from "react";

export default function RutaContacto() {
  return (
    <div className="w-full py-10">
      <ul className="flex text-b font-bold">
        <li className="text-slate-500">
          <Link href="/">Main</Link> |&nbsp;{" "}
        </li>
        <li className="text-black">Contacto</li>
      </ul>
    </div>
  );
}
