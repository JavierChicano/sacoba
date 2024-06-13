"use client";
import Link from "next/link";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import SeccionInfoProducto from "./seccionInfoProducto";
import { useEffect, useState } from "react";
import { LeerDatosCookie } from "../perfil/cookiePerfil";
import { RecogerDatosCarrito } from "./recogerDatosCarrito";
import RutaCarrito from "./rutaCarrito";
import { usePrecioTotalCarrito } from "../../../../states/states";

export default function CompClienteCarrito() {
  const [objetosCarro, setObjetosCarro] = useState<string[]>([]);
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [carritoVacio, setCarritoVacio] = useState(false);
  const [refrescar, setRefrescar] = useState(false);
  const { totalProductos } = usePrecioTotalCarrito();

  const obtenerUsuario = async () => {
    try {
      const cookie = await LeerDatosCookie();
      //Si la sesion esta iniciada
      if (cookie.status) {
        setSesionIniciada(true);
        const consulta = await RecogerDatosCarrito(
          cookie.usuario.correoElectronico
        );
        //Si la consulta sale bn
        if (consulta.success && consulta.carrito !== undefined) {
          const detallesProductos = consulta.carrito.map((producto) => {
            const detalles = JSON.parse(producto.detallesProducto);
            return {
              ...detalles,
              id: producto.id,
            };
          });
          setObjetosCarro(detallesProductos.reverse());
        } else {
          if (consulta.message === "El carrito está vacio") {
            setCarritoVacio(true);
          }
        }
      } else {
        //Si la sesion no esta iniciada
        let carritoString = localStorage.getItem("carrito");
        if (carritoString !== null) {
          const carritoObjeto = JSON.parse(carritoString);
          if ((carritoObjeto[0] === undefined)) {
            //Si el carrito tiene un solo objeto hay que convertirlo a array
            const carroArray = [carritoObjeto];
            setObjetosCarro(carroArray.reverse());
          } else {
            setObjetosCarro(carritoObjeto.reverse());
          }
        } else {
          setCarritoVacio(true);
        }
      }
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };

  //lanzar la funcion al cargar la pagina
  useEffect(() => {
    obtenerUsuario();
  }, []);

  const recargarCarritoLocal = () => {
    let carritoString = localStorage.getItem("carrito");
    if (carritoString !== null) {
      const carritoObjeto = JSON.parse(carritoString);
      setObjetosCarro(carritoObjeto.reverse());
    }else{
      setCarritoVacio(true);
    }
  };

  // localStorage.clear()
  console.log(objetosCarro)
  return (
    <section className="w-full">
      <RutaCarrito />
      {carritoVacio ? (
        <div className="text-4xl w-full flex flex-col text-center gap-4">
          <span>El carrito está vacio</span>
          <div className="text-2xl flex gap-6 justify-center">
            <Link
              href={"/Packs"}
              className="border border-colorBase bg-fondoSecundario hover:bg-colorBase p-2 w-44"
            >
              Ir a packs
            </Link>
            <Link
              href={"/#productos"}
              className="bg-colorBase p-2 w-44 flex justify-center"
            >
              Ir a productos
            </Link>
          </div>
        </div>
      ) : (
        <>
          <ul className="w-full flex justify-around text-3xl border-b border-colorBase">
            <li className="w-1/2 pl-5 ">Producto</li>
            <li className="w-1/2">
              <ul className="flex justify-around">
                <li className="w-32 flex justify-center">Unidad</li>
                <li className="w-32 flex justify-center">Cantidad</li>
                <li className="w-32 flex justify-center">Total</li>
              </ul>
            </li>
          </ul>
          {objetosCarro.map((objeto, index) => (
            <SeccionInfoProducto
              producto={objeto}
              key={index}
              clave={index}
              onDelete={obtenerUsuario}
              onDeleteLocal={recargarCarritoLocal}
            />
          ))}
          <section className="w-full flex justify-between items-center text-2xl">
            <aside className="w-1/2 flex justify-center gap-2 cursor-pointer underline">
              <Link href="/" className="flex items-center hover:text-colorBase">
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
                    Total: {Math.round(totalProductos)}€
                  </div>
                  <h1 className="p-2 bg-fondoSecundario border flex justify-center border-colorBase hover:bg-colorBase cursor-pointer">
                    Proceder al pago
                  </h1>
                </div>
              </div>
            </aside>
          </section>
        </>
      )}
    </section>
  );
}
