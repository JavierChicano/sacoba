"use client";
import { useEffect, useState } from "react";
import ProductoCarrito from "./productoCarrito";
import Link from "next/link";
import { usePrecioTotalCarrito } from "../../../../states/states";
import { LeerDatosCookie } from "../perfil/cookiePerfil";
import { RecogerDatosCarrito } from "../CarritoCompra/recogerDatosCarrito";
import Euro from "../euro";
import BotonCompraCarrito from "../CarritoCompra/botonCompraCarrito";

export default function DesplegableCarrito() {
  const [objetosCarro, setObjetosCarro] = useState<string[]>([]);
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [carritoVacio, setCarritoVacio] = useState(false);
  const { totalProductos } = usePrecioTotalCarrito();
  const [loading, setLoading] = useState(true);

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
          if (carritoObjeto[0] === undefined) {
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
    } finally {
      setLoading(false); // Marcar la carga como completada, independientemente de si hubo un error o no
    }
  };
  console.log(objetosCarro);

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
    <>
      {!loading && (
        <aside className="w-[448px] right-1 absolute pt-2">
          <div className="bg-fondoSecundario p-5 shadow-lg shadow-fondoSecundario z-50">
            {!carritoVacio ? (
              <>
                <section className="flex flex-col gap-3 border-b border-colorBase pb-2 max-h-[416px] overflow-y-scroll">
                  {objetosCarro.map((objeto, index) => (
                    <ProductoCarrito
                      producto={objeto}
                      key={index}
                      clave={index}
                      onDelete={obtenerUsuario}
                      onDeleteLocal={recargarCarritoLocal}
                    />
                  ))}
                </section>
                <div className="my-4 text-2xl">
                  Total: {Math.round(totalProductos)}€
                </div>
                <div className="grid grid-cols-2 gap-2 h-16 text-xl">
                  <BotonCompraCarrito productos={objetosCarro} />
                  <Link
                    href="/CarritoCompra"
                    className="bg-colorBase p-2 h-full flex justify-center items-center"
                  >
                    Ir al carrito
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-xl w-full flex flex-col text-center gap-4">
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
            )}
          </div>
        </aside>
      )}
      <div></div>
    </>
  );
}
