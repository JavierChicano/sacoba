import Link from "next/link";
import React from "react";

export default function RutaPackConcreto({modelo}:{modelo: string}) {
  return (
    <div className="w-full">
      <ul className="flex">
        <li className="text-gray-400">
          <Link href="/">Main</Link> |&nbsp;{" "}
        </li>
        <li className="text-gray-400">
          <Link href="/Packs/">Packs</Link> |&nbsp;{" "}
        </li>
        <li>
          Pack {modelo}
        </li>
      </ul>
    </div>
  );
}
