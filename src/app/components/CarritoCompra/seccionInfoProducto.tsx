"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrecioTotalCarrito } from "../../../../states/states";
import { ModificarCantidadProducto } from "./modificarCantidadProducto";

export default function SeccionInfoProducto({
  producto,
  clave,
}: {
  producto: any;
  clave: number;
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
    }
  }, []);

  const modificarCantidadBBDD = async (cantidadCalculada: number) => {
    const productoConNuevaCantidad = {
      ...producto,
      cantidad: cantidadCalculada,
    };
    const response = await ModificarCantidadProducto(productoConNuevaCantidad);
    //Si la consulta a la BBDD, seguramente sea porq la sesion no esta iniciada
    if (!response) {
      let carritoString = localStorage.getItem("carrito");
      if (carritoString !== null) {
        const carritoObjeto = JSON.parse(carritoString);
        const productosActualizados = reemplazarProducto(
          carritoObjeto,
          productoConNuevaCantidad
        );
        localStorage.setItem("carrito", JSON.stringify(productosActualizados));
      }
    }
  };
  return (
    <section className="flex mt-4 border-b border-colorBase pb-4 justify-between w-full items-center">
      <div className="w-1/2 flex gap-8">
        <div className="w-40 h-36">
          <Image
            className="w-full h-full rounded-lg"
            src={`/productos/${producto.producto}s/${modelo()}.png`}
            alt="Imagen mesa"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h1 className="text-3xl">{producto.modelo}</h1>
          <h2 className="text-lg">{producto.acabado}</h2>
          <h2 className="text-lg">{producto.color}</h2>
          <h2 className="text-lg">{infoExtra}</h2>
        </div>
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
        <span className="w-32 flex justify-center text-xl">{Math.round(total)}€</span>
      </div>
    </section>
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
