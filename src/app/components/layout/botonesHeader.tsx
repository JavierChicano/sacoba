import { useEffect, useState } from "react";
import { IconoCarrito } from "../iconos/iconoCarrito";
import BotonTema from "./botonCambioTema";
import { IconUser } from "@tabler/icons-react";
import DesplegableProducto from "./desplegableProducto";
import Link from "next/link";
import DesplegableCarrito from "./desplegableCarrito";
import HoverBoton from "./hoverBotones";
import DesplegableLogin from "./desplegableLogin";
import { SesionIniciadaComprobacion } from "./sesionIniciada";
import { usePathname } from "next/navigation";
import { cn } from "@nextui-org/react";

export default function BotonesHeader() {
  const pathName = usePathname();
  const [mostrarDesplegable, setMostrarDesplegable] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [cookieIniciada, setCookieIniciada] = useState(false);

  //Verficia que estamos en la pagina producto...
  const contieneProducto = /^\/Producto(?!\/)/i.test(pathName);
  //Comprueba si la sesion esta iniciada
  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const cookie = await SesionIniciadaComprobacion(); 
        setCookieIniciada(cookie.status)
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    obtenerUsuario(); 
  });
  
  
  return (
    <ul className={cn(contieneProducto ? "flex justify-around w-3/4 m-10 text-xl items-center bg-fondoHeader p-2 rounded-lg backdrop-blur-xl": "flex justify-around w-3/4 m-10 text-xl items-center")}>
      <HoverBoton>
        <p className={cn(pathName === "/Outlet" ? "text-center font-bold text-colorBase" : "text-center")}>Outlet</p>
      </HoverBoton>
      <HoverBoton>
        <p className={cn(pathName === "/Packs" ? "text-center font-bold text-colorBase" : "text-center")}>
          <Link href="/Packs/">Packs</Link>
        </p>
      </HoverBoton>
      <DesplegableProducto />
      <HoverBoton>
        <p className={cn(pathName === "/Contacto" ? "text-center font-bold text-colorBase" : "text-center")}>
          <Link href="/Contacto/">Contacto</Link>
        </p>
      </HoverBoton>
      <li className="w-36 flex justify-around items-center">
        <div className="absolute flex items-center z-50">
          <BotonTema />
          <div
            onMouseEnter={() => setMostrarDesplegable(true)}
            onMouseLeave={() => setMostrarDesplegable(false)}
          >
            <Link href="/CarritoCompra">
              <IconoCarrito
                size={40}
                color={(mostrarDesplegable || pathName === "/CarritoCompra") ? "orange" : "currentColor"}
              />
            </Link>

            {mostrarDesplegable && <DesplegableCarrito />}
          </div>
          <div
            onMouseEnter={() => setMostrarLogin(true)}
            onMouseLeave={() => setMostrarLogin(false)}
          >
            {cookieIniciada ? (
              <Link href={"/Perfil"}>
                  <IconUser
                    stroke={2}
                    size={40}
                    color={(mostrarLogin || pathName === "/Perfil") ? "orange" : "currentColor"}

                  />
              </Link>
            ) : (
                <IconUser
                  stroke={2}
                  size={40}
                />
            )}
            {mostrarLogin && !cookieIniciada && <DesplegableLogin />}
          </div>
        </div>
      </li>
    </ul>
  );
}
