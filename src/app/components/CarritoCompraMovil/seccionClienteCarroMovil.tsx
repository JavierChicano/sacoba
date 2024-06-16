"use client";
import Link from "next/link";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { LeerDatosCookie } from "../perfil/cookiePerfil";
import { usePrecioTotalCarrito } from "../../../../states/states";
import { RecogerDatosCarrito } from "../CarritoCompra/recogerDatosCarrito";
import RutaCarrito from "../CarritoCompra/rutaCarrito";
import ProductoCarrito from "../layout/productoCarrito";
import BotonCompraCarrito from "../CarritoCompra/botonCompraCarrito";

export default function CompClienteCarritoMovil() {
  const [objetosCarro, setObjetosCarro] = useState<string[]>([]);
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [carritoVacio, setCarritoVacio] = useState(false);
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
          if (carritoObjeto.length > 1) {
            setObjetosCarro(carritoObjeto.reverse());
          } else {
            //Si el carrito tiene un solo objeto hay que convertirlo a array
            const carroArray = [carritoObjeto];
            setObjetosCarro(carroArray.reverse());
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
    } else {
      setCarritoVacio(true);
    }
  };

  return (
    <section className="w-full px-8">
      <RutaCarrito />
      {carritoVacio ? (
        <div className="text-2xl w-full flex flex-col text-center gap-4">
          <span>El carrito está vacío</span>
          <div className="text-xl flex gap-6 justify-center">
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
          <h1 className="text-2xl mt-4 border-b border-colorBase mb-2">
            Mi Carrito ({objetosCarro.length}){" "}
          </h1>
          {objetosCarro.map((objeto, index) => (
            <ProductoCarrito
              producto={objeto}
              key={index}
              clave={index}
              onDelete={obtenerUsuario}
              onDeleteLocal={recargarCarritoLocal}
            />
          ))}
          <section className="w-full flex flex-col justify-between items-center text-2xl">
            {!sesionIniciada && (
              <aside className="w-full flex justify-center text-red-400 text-xl">
                ¡Para guardar el carro inicie sesión!
              </aside>
            )}
            <div className="my-4 text-2xl self-start">
              Total: {Math.round(totalProductos)}€
            </div>
            <div className="grid grid-cols-2 gap-2 h-16 text-xl">
              <BotonCompraCarrito  productos={objetosCarro}/>
              <Link
                href="/CarritoCompra"
                className="bg-colorBase p-2 h-full flex justify-center items-center"
              >
                Ir al carrito
              </Link>
            </div>
          </section>
        </>
      )}
    </section>
  );
}
