"use client";
import Link from "next/link";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import SeccionInfoProducto from "./seccionInfoProducto";
import { useEffect, useState } from "react";
import { LeerDatosCookie } from "../perfil/cookiePerfil";

export default function CompClienteCarrito() {
  const [objetosCarro, setObjetosCarro] = useState<string[]>([]);
  const [sesionIniciada, setSesionIniciada] = useState(false);

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const cookie = await LeerDatosCookie();
        //Si la sesion esta iniciada
        if (cookie.status) {
          setSesionIniciada(true);
        } else {
          //Si la sesion no esta iniciada
          let carritoString = localStorage.getItem("carrito");
          if (carritoString !== null) {
            const carritoObjeto = JSON.parse(carritoString);
            setObjetosCarro(carritoObjeto);
          }
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    obtenerUsuario();
  }, []);

  return (
    <section className="w-full">
      <ul className="w-full flex justify-around text-3xl border-b border-colorBase">
        <li className="w-1/2 pl-10">Producto</li>
        <li className="w-1/2">
          <ul className="flex justify-around">
            <li className="w-32 flex justify-center">Unidad</li>
            <li className="w-32 flex justify-center">Cantidad</li>
            <li className="w-32 flex justify-center">Total</li>
          </ul>
        </li>
      </ul>
      {objetosCarro.map((objeto, index) => (
        <SeccionInfoProducto producto={objeto} key={index} />
      ))}
      <section className="w-full flex justify-between items-center text-2xl mt-4">
        <aside className="w-1/2 flex justify-center gap-2 cursor-pointer underline">
          <Link href="/" className="flex items-center">
            <IconArrowNarrowLeft stroke={2} />
            Seguir comprando
          </Link>
        </aside>
        {!sesionIniciada && (
          <aside className="w-full flex justify-center text-red-400">
            ¡Para guardar el carro inicie sesión!
          </aside>
        )}
        <aside className="w-1/2 flex justify-around flex-col gap-4">
          <div className="w-42 justify-around flex items-center mt-16">
            <span className="w-32"></span>
            <div className="w-60 flex flex-col justify-end gap-3">
              <div className="flex justify-center items-center text-3xl">
                  Total: XXX€
              </div>
              <h1 className="p-2 bg-fondoSecundario border flex justify-center border-colorBase hover:bg-colorBase cursor-pointer">
                Proceder al pago
              </h1>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
}
