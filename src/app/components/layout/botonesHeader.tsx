import Link from "next/link";
import { IconoCarrito } from "../iconos/iconoCarrito";
import { IconoCuenta } from "../iconos/iconoCuenta";
import BotonTema from "./botonCambioTema";
import { IconUser } from '@tabler/icons-react';

export default function BotonesHeader() {
  return (
    <ul className="flex justify-around w-3/4 m-10 text-xl items-center">
      <li className="w-36 flex justify-center">Outlet</li>
      <li className="w-36 flex justify-center">Packs</li>
      <li className="w-36 flex justify-center">
        <Link href="/ProductoMesa/">Productos</Link>
      </li>
      <li className="w-36 flex justify-center">Contacto</li>
      <li className="w-36 flex justify-around items-center">
        <BotonTema/>
        <IconoCarrito size={40} />
        <IconUser stroke={2}  size={40}/>
      </li>
    </ul>
  );
}
