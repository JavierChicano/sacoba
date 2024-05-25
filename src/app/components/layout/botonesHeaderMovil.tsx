import { useEffect, useState } from "react";
import { IconoCarrito } from "../iconos/iconoCarrito";
import BotonTema from "./botonCambioTema";
import { IconUser, IconX } from "@tabler/icons-react";
import DesplegableProducto from "./desplegableProducto";
import Link from "next/link";
import DesplegableCarrito from "./desplegableCarrito";
import HoverBoton from "./hoverBotones";
import DesplegableLogin from "./desplegableLogin";
import { SesionIniciadaComprobacion } from "./sesionIniciada";
import { usePathname } from "next/navigation";
import { cn } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function BotonesHeaderMovil({ onClose }:{onClose: () => void}) {
  const { theme } = useTheme()
  const pathName = usePathname();
  const [mostrarDesplegable, setMostrarDesplegable] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [cookieIniciada, setCookieIniciada] = useState(false);

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
    <ul className={`flex lg:hidden fixed top-0 right-0 w-full h-screen z-50 flex-col items-center justify-center gap-10 text-4xl backdrop-blur-sm ${theme==="light" ? "bg-white/20" : "bg-black/20"}`}>
        <div className="w-4/5 flex justify-end"><IconX size={50} onClick={onClose}/></div>
        <p className={cn(pathName === "/Outlet" ? "text-center font-bold text-colorBase" : "text-center")}>          
          <Link href="/Outlet/">Outlet</Link>
        </p>
        <p className={cn(pathName === "/Packs" ? "text-center font-bold text-colorBase" : "text-center")}>
          <Link href="/Packs/">Packs</Link>
        </p>
      <DesplegableProducto />
        <p className={cn(pathName === "/Contacto" ? "text-center font-bold text-colorBase" : "text-center")}>
          <Link href="/Contacto/">Contacto</Link>
        </p>
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

            {mostrarDesplegable && pathName !== "/CarritoCompra" && <DesplegableCarrito />}
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
