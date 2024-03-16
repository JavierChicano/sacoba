import { IconoCarrito } from "../iconos/iconoCarrito";
import BotonTema from "./botonCambioTema";
import { IconUser } from '@tabler/icons-react';
import DesplegableProducto from "./desplegableProducto";
import HoverBoton from "./hoverBotones";

export default function BotonesHeader() {
  return (
    <ul className="flex justify-around w-3/4 m-10 text-xl items-center">
      
      <HoverBoton><p className="text-center">Outlet</p></HoverBoton>
      <HoverBoton><p className="text-center">Packs</p></HoverBoton>
      <DesplegableProducto/>
      <HoverBoton><p className="text-center">Contacto</p></HoverBoton>
      <li className="w-36 flex justify-around items-center">
        <BotonTema/>
        <IconoCarrito size={40} />
        <IconUser stroke={2}  size={40}/>
      </li>
    </ul>
  );
}
