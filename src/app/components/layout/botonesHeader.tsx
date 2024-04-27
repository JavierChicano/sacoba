import { useEffect, useState } from "react";
import { IconoCarrito } from "../iconos/iconoCarrito";
import BotonTema from "./botonCambioTema";
import { IconUser } from "@tabler/icons-react";
import DesplegableProducto from "./desplegableProducto";
import Link from "next/link";
import DesplegableCarrito from "./desplegableCarrito";
import HoverBoton from "./hoverBotones";
import DesplegableLogin from "./desplegableLogin";

export default function BotonesHeader() {
  const [mostrarDesplegable, setMostrarDesplegable] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [sesionIniciada, setSesionIniciada] = useState(false);

  useEffect(() => {
    const sesionGuardada = sessionStorage.getItem("sesionIniciada");
    if (sesionGuardada === "true") {
      setSesionIniciada(true);
    } else {
      setSesionIniciada(false);
    }
  }, []);

  return (
    <ul className="flex justify-around w-3/4 m-10 text-xl items-center">
      <HoverBoton>
        <p className="text-center">Outlet</p>
      </HoverBoton>
      <HoverBoton>
        <p className="text-center">
          <Link href="/Packs/">Packs</Link>
        </p>
      </HoverBoton>
      <DesplegableProducto />
      <HoverBoton>
        <p className="text-center">
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
                color={mostrarDesplegable ? "orange" : "currentColor"}
              />
            </Link>

            {mostrarDesplegable && sesionIniciada && <DesplegableCarrito />}
          </div>
          <div
            onMouseEnter={() => setMostrarLogin(true)}
            onMouseLeave={() => setMostrarLogin(false)}
          >
            {sesionIniciada ? (
              <Link href={"/Perfil"}>
                  <IconUser
                    stroke={2}
                    size={40}
                    className="cursor-pointer"
                  />
              </Link>
            ) : (
                <IconUser
                  stroke={2}
                  size={40}
                />
            )}
            {mostrarLogin && !sesionIniciada && <DesplegableLogin />}
          </div>
        </div>
      </li>
    </ul>
  );
}
