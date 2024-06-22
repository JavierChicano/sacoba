"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrecioTotalCarrito } from "../../../../states/states";
import { ModificarCantidadProducto } from "./modificarCantidadProducto";
import BotonPapelera from "./botonPapelera";
import { EliminarProductoCarrito } from "./EliminarProductoCarrito";
import { Toaster, toast } from "sonner";
import { LeerDatosCookie } from "../perfil/cookiePerfil";

export default function SeccionInfoProducto({
  producto,
  clave,
  onDelete
}: {
  producto: any;
  clave: number;
  onDelete: () => Promise<void>
}) {
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(1);
  const [infoExtra, setInfoExtra] = useState("");

  //Estado global para guarda la suma de todos los precios
  const { setSumaTotal } = usePrecioTotalCarrito();

  const precioTotal = () => {
    setTotal(cantidad * producto.precio);
  };
  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
    modificarCantidadBBDD(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      modificarCantidadBBDD(cantidad - 1);
    }
  };
  const modelo = () => {
    const modelo = producto.modelo.toLowerCase();
    return modelo;
  };

  useEffect(() => {
    precioTotal();
  }, [cantidad]);

  //Setear el precio total, estado global
  useEffect(() => {
    setSumaTotal(clave, total);
  }, [total]);

  useEffect(() => {
    setCantidad(producto.cantidad);
    if (producto.producto === "Mesa") {
      setInfoExtra(producto.dimension + "cm");
    } else if (producto.producto === "Silla") {
      setInfoExtra(producto.formato);
    } else if (producto.producto === "Banco") {
      setInfoExtra("Modulos: " + producto.modulos.length);
    } else if (producto.producto === "Pack") {
      setInfoExtra("Pack: " + producto.packElegido);
    }
  }, []);

  const eliminarElemento = async () => {
    //Comprobamos si el usuario esta logueado
    const user = await LeerDatosCookie();
    if (user.status) {
      //Si esta logueado quitamos el producto de la tabla CARRITO
      const response = await EliminarProductoCarrito(producto, "");
      if (response) {
        toast.success("Producto eliminado del carrito");
        setSumaTotal(clave, 0);
        await onDelete();
        return;
      }
    } else {
      //Si NO esta logueado quitamos el producto de la tabla CARRITOLOCAL
      const responseLocal = await EliminarProductoCarrito(producto, "local");
      if (responseLocal) {
        toast.success("Producto eliminado del carrito");
        setSumaTotal(clave, 0);
        await onDelete();
        return;
      }
    }
  };

  const modificarCantidadBBDD = async (cantidadCalculada: number) => {
    const productoConNuevaCantidad = {
      ...producto,
      cantidad: cantidadCalculada,
    };
    //Comprobamos si el usuario esta logueado
    const user = await LeerDatosCookie();
    if (user.status) {
      //Si esta logueamos ejecutamos esta consulta
      await ModificarCantidadProducto(productoConNuevaCantidad, "");
    }else{
      await ModificarCantidadProducto(productoConNuevaCantidad, "local");
    }
  };
 
  return (
    <section className="flex mt-4 border-b border-colorBase pb-4 justify-between w-full items-center">
      <div className="w-1/2 flex gap-8 justify-between">
        <div className="flex gap-8">
          <div className="w-40 h-36">
            <Image
              className="w-full h-full rounded-lg"
              src={`/productos/${producto.producto.toLowerCase()}s/${modelo()}.png`}
              alt={`Imagen de ${producto.producto}${modelo()}`}
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1 className="text-3xl">{producto.modelo}</h1>
            <h2 className="text-lg">{producto.acabado || producto.acabadoTapizado}</h2>
            <h2 className="text-lg">{producto.color || producto.colorTapizado}</h2>
            <h2 className="text-lg">{infoExtra}</h2>
          </div>
        </div>
        <BotonPapelera onDelete={eliminarElemento} />
      </div>
      <div className="w-1/2 flex justify-around">
        <span className="w-32 flex justify-center text-xl">
          {Math.round(producto.precio)}€
        </span>
        <div className="flex h-10 w-32 justify-center">
          <div
            className="bg-fondoTerciario p-2 flex justify-center hover:bg-colorBase cursor-pointer"
            onClick={() => {
              disminuirCantidad();
              precioTotal();
            }}
          >
            <IconMinus stroke={2} />
          </div>
          <div className="bg-fondoSecundario w-8  p-2 flex justify-center">
            {cantidad}
          </div>
          <div
            className="bg-fondoTerciario p-2 flex justify-center hover:bg-colorBase cursor-pointer"
            onClick={() => {
              aumentarCantidad();
              precioTotal();
            }}
          >
            <IconPlus stroke={2} />
          </div>
        </div>
        <span className="w-32 flex justify-center text-xl">
          {Math.round(total)}€
        </span>
      </div>
      <Toaster position="top-right" richColors />
    </section>
  );
}
