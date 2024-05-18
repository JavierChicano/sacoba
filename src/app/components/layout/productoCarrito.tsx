import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrecioTotalCarrito } from "../../../../states/states";
import { IconTrash } from "@tabler/icons-react";
import { EliminarProductoCarrito } from "../CarritoCompra/EliminarProductoCarrito";
import { Toaster, toast } from "sonner";

export default function ProductoCarrito({
  producto,
  clave,
  onDelete,
  onDeleteLocal
}: {
  producto: any;
  clave: number;
  onDelete: () => Promise<void>;
  onDeleteLocal: () => void;
}) {
  const { setSumaTotal } = usePrecioTotalCarrito();
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(1);

  const precioTotal = () => {
    setTotal(producto.cantidad * producto.precio);
  };
  const modelo = () => {
    const modelo = producto.modelo.toLowerCase();
    return modelo;
  };

  useEffect(() => {
    setSumaTotal(clave, total);
  }, [total]);

  useEffect(() => {
    precioTotal();
  }, [cantidad]);

  const eliminarElemento = async () => {
    const response = await EliminarProductoCarrito(producto);
    
    //Si la consulta a la BBDD es false, seguramente sea porq la sesion no esta iniciada
    if (!response) {
      let carritoString = localStorage.getItem("carrito");
      if (carritoString !== null) {
        const carritoObjeto = JSON.parse(carritoString);
        if (carritoObjeto.length > 1) {
          const productosActualizados = eliminarProducto(carritoObjeto, producto);
          console.log("ACTUZALIZADO", productosActualizados)
          localStorage.setItem("carrito",JSON.stringify(productosActualizados));
        } else {
          localStorage.removeItem("carrito");
        }
        setSumaTotal(clave, 0);
        onDeleteLocal();
      }
    } else {
      toast.success("Producto eliminado del carrito");
      setSumaTotal(clave, 0);
      await onDelete();
    }
  };

  return (
    <article className="grid grid-cols-[1fr_2fr] gap-4">
      <div className="w-32 h-28">
        <Image
          className="w-full h-full cursor-pointer rounded-lg"
          src={`/productos/${producto.producto}s/${modelo()}.png`}
          alt={`Imagen de ${producto.producto}${modelo()}`}
          width={300}
          height={300}
        />
      </div>
      <section>
        <h1 className="text-3xl">{producto.modelo}</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <span>{producto.acabado}</span>
            <div>
              Precio: {Math.round(producto.precio * producto.cantidad)}€
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <IconTrash className="cursor-pointer hover:text-red-600 hover:scale-110" size={28} onClick={eliminarElemento}/>
          </div>
        </div>
      </section>
      <Toaster position="top-right" richColors />
    </article>
  );
}

const eliminarProducto = (productos: any, productoAEliminar: any) => {
  return productos.filter((producto: any) => {
    // Filtramos para excluir el producto a eliminar
    return !(
      producto.producto === productoAEliminar.producto &&
      producto.modelo === productoAEliminar.modelo &&
      producto.dimension === productoAEliminar.dimension &&
      producto.acabado === productoAEliminar.acabado &&
      producto.grupo === productoAEliminar.grupo &&
      producto.color === productoAEliminar.color &&
      producto.grosor === productoAEliminar.grosor &&
      producto.colorPata === productoAEliminar.colorPata &&
      producto.colorExtensible === productoAEliminar.colorExtensible &&
      producto.altura === productoAEliminar.altura &&
      producto.precio === productoAEliminar.precio
    );
  });
};