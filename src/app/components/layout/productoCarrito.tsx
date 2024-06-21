import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrecioTotalCarrito } from "../../../../states/states";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import { EliminarProductoCarrito } from "../CarritoCompra/EliminarProductoCarrito";
import { Toaster, toast } from "sonner";
import { ModificarCantidadProducto } from "../CarritoCompra/modificarCantidadProducto";
import { LeerDatosCookie } from "../perfil/cookiePerfil";

export default function ProductoCarrito({
  producto,
  clave,
  onDelete,
}: {
  producto: any;
  clave: number;
  onDelete: () => Promise<void>;
}) {
  const { setSumaTotal } = usePrecioTotalCarrito();
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(1);

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
    setSumaTotal(clave, total);
  }, [total]);

  useEffect(() => {
    precioTotal();
  }, [cantidad]);

  useEffect(() => {
    setCantidad(producto.cantidad);
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
    <article className="grid grid-cols-[1fr_2fr] gap-4 lg:border-none border-b border-colorBase lg:mb-0 mb-2 pb-2 lg:pb-0">
      <div className="w-32 h-28">
        <Image
          className="w-full h-full cursor-pointer rounded-lg"
          src={`/productos/${producto.producto.toLowerCase()}s/${modelo()}.png`}
          alt={`Imagen de ${producto.producto}${modelo()}`}
          width={300}
          height={300}
        />
      </div>
      <section>
        <h1 className="text-3xl">{producto.modelo}</h1>
        <div className="grid grid-cols-3 gap-4 text-lg">
          <div className="lg:col-span-2 col-span-3 flex flex-col lg:gap-0 gap-2">
            <span>{producto.acabado || producto.acabadoTapizado}</span>
            {/* Esta parte solo es visible en movil */}
            <aside className="lg:hidden flex gap-4 items-center">
              {/* Parte para agregar o disminuirCantidad */}
              <div className="flex h-10 w-32">
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
              <IconTrash
                className="cursor-pointer hover:text-red-600 hover:scale-110"
                size={28}
                onClick={eliminarElemento}
              />
            </aside>
            <div className="text-2xl lg:base">Precio: {Math.round(total)}€</div>
          </div>
          <div className="w-full lg:flex justify-center items-center hidden">
            <IconTrash
              className="cursor-pointer hover:text-red-600 hover:scale-110"
              size={28}
              onClick={eliminarElemento}
            />
          </div>
        </div>
      </section>
      <Toaster position="top-right" richColors />
    </article>
  );
}

const reemplazarProducto = (productos: any, nuevoProducto: any) => {
  if (productos.length > 1) {
    return productos.map((producto: any) => {
      // Comprobamos si los productos son iguales excepto en la cantidad
      if (
        producto.producto === nuevoProducto.producto &&
        producto.modelo === nuevoProducto.modelo &&
        producto.dimension === nuevoProducto.dimension &&
        producto.acabado === nuevoProducto.acabado &&
        producto.grupo === nuevoProducto.grupo &&
        producto.color === nuevoProducto.color &&
        producto.grosor === nuevoProducto.grosor &&
        producto.colorPata === nuevoProducto.colorPata &&
        producto.colorExtensible === nuevoProducto.colorExtensible &&
        producto.altura === nuevoProducto.altura &&
        producto.precio === nuevoProducto.precio
      ) {
        // Si son iguales excepto en la cantidad, reemplazamos el antiguo por el nuevo
        return nuevoProducto;
      } else {
        // Si no coinciden, mantenemos el producto existente
        return producto;
      }
    });
  } else {
    return nuevoProducto;
  }
};

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
