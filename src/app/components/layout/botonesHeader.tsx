import Link from "next/link";
import { IconoCarrito } from "../iconos/iconoCarrito";
import { IconoCuenta } from "../iconos/iconoCuenta";

export default function BotonesHeader() {
  return (
    <ul className="flex justify-around w-3/4 m-10">
      <li className="w-36 flex justify-center">Outlet</li>
      <li className="w-36 flex justify-center">Packs</li>
      <li className="w-36 flex justify-center">
        <Link href="/ProductoMesa/">Productos</Link>
      </li>
      <li className="w-36 flex justify-center">Contacto</li>
      <li className="w-36 flex justify-around">
        <IconoCarrito size={30} />
        <IconoCuenta size={30} />
      </li>
    </ul>
  );
}
