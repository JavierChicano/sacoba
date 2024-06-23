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
import DesplegableProductoMovil from "./desplegableProductoMovil";

export default function BotonesHeaderMovil({
  onClose,
}: {
  onClose: () => void;
}) {
  const { theme } = useTheme();
  const pathName = usePathname();
  const [mostrarDesplegable, setMostrarDesplegable] = useState(false);
  const [cookieIniciada, setCookieIniciada] = useState(false);
  const [loading, setLoading] = useState(true);

  const contieneProducto = /Producto/i.test(pathName);

  //Comprueba si la sesion esta iniciada
  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const cookie = await SesionIniciadaComprobacion();
        setCookieIniciada(cookie.status);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      } finally {
        setLoading(false); 
      }
    };
    obtenerUsuario();
  });

  return (
    <>
      {!loading && (
        <>
          {!mostrarDesplegable && (
            <ul
              className={`flex lg:hidden fixed top-0 right-0 w-full h-screen z-50 flex-col items-center justify-center gap-10 text-4xl backdrop-blur-lg ${
                theme === "light" ? "bg-white/20" : "bg-black/20"
              }`}
            >
              <div className="w-4/5 flex justify-end">
                <IconX size={50} onClick={onClose} />
              </div>
              <p
                className={cn(
                  pathName === "/Outlet"
                    ? "text-center font-bold text-colorBase"
                    : "text-center"
                )}
              >
                <Link href="/Outlet/" onClick={onClose}>
                  Outlet
                </Link>
              </p>
              <p
                className={cn(
                  pathName === "/Packs"
                    ? "text-center font-bold text-colorBase"
                    : "text-center"
                )}
              >
                <Link href="/Packs/" onClick={onClose}>
                  Packs
                </Link>
              </p>
              <p
                className={cn(
                  contieneProducto
                    ? "text-center cursor-pointer font-bold text-colorBase"
                    : "text-center cursor-pointer"
                )}
                onClick={() => setMostrarDesplegable(true)}
              >
                Productos
              </p>
              <p
                className={cn(
                  pathName === "/Contacto"
                    ? "text-center font-bold text-colorBase"
                    : "text-center"
                )}
              >
                <Link href="/Contacto/" onClick={onClose}>
                  Contacto
                </Link>
              </p>
              <li className="w-36 flex justify-around items-center">
                <div className="absolute flex items-center z-50">
                  <BotonTema />
                  <Link href="/CarritoCompraMovil" onClick={onClose}>
                    <IconoCarrito
                      size={50}
                      color={
                        pathName === "/CarritoCompraMovil"
                          ? "orange"
                          : "currentColor"
                      }
                    />
                  </Link>
                  {cookieIniciada && (
                    <Link href={"/Perfil/InfoUser"} onClick={onClose}>
                      <IconUser
                        stroke={2}
                        size={50}
                        color={
                          pathName === "/Perfil/InfoUser" ? "orange" : "currentColor"
                        }
                      />
                    </Link>
                  )}
                </div>
              </li>
              {!cookieIniciada && (
                <li className="w-full grid grid-cols-2 text-2xl gap-2 p-2">
                  <Link
                    onClick={onClose}
                    href={"/Registro"}
                    className="border border-colorBase bg-fondoSecundario flex justify-center p-2 cursor-pointer"
                  >
                    Registrate
                  </Link>
                  <Link
                    onClick={onClose}
                    href={"/Login"}
                    className="bg-colorBase p-2 flex justify-center"
                  >
                    Inicia sesion
                  </Link>
                </li>
              )}
            </ul>
          )}
          {mostrarDesplegable && (
            <DesplegableProductoMovil
              onBack={() => setMostrarDesplegable(false)}
              onClose={onClose}
            />
          )}
        </>
      )}
    </>
  );
}
