import { inArray } from "drizzle-orm";
import { TipoConsulta, TipoUsuario } from "../../tipos/tipos";
import { db } from "./index";
import { carrito, consultas, pedidos, usuarios, carritoLocal } from "./schema";
import jwt from "jsonwebtoken";
import { deleteCarritoComprado, deleteProductoCarritoLocal2 } from "./deletes";
import { selectCarritoParaPedido } from "./selectsDinamicos";

export async function registrarUsuario({ usuario }: { usuario: TipoUsuario }) {
  try {
    await db.insert(usuarios).values({
      correoElectronico: usuario.correoElectronico,
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      contraseña: usuario.contraseña,
    });
    // Crear el token de usuario
    const tokenGenerado = jwt.sign(
      {
        // El token expira en 7 días
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
        //Contiene la informacion del usuario
        usuario: {
          correoElectronico: usuario.correoElectronico,
          nombre: usuario.nombre,
          apellidos: usuario.apellidos,
        },
      },
      process.env.AUTH_USER_TOKEN!
    );

    // Si la inserción se realiza sin errores, devolvemos true
    return {
      success: true,
      token: tokenGenerado,
    };
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    return {
      success: false,
    };
  }
}

export async function registrarConsulta({
  consulta,
}: {
  consulta: TipoConsulta;
}) {
  try {
    await db.insert(consultas).values({
      correoElectronico: consulta.correoElectronico,
      nombre: consulta.nombre,
      motivo: consulta.motivo,
      consulta: consulta.consulta,
    });
    // Si la inserción se realiza sin errores, devolvemos true
    return true;
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    return false;
  }
}

export async function juntarAmbosCarritos({
  carritoIds,
  correo,
}: {
  carritoIds: [];
  correo: string;
}) {
  try {
    const productosEnLocal = await db
      .select({
        id: carritoLocal.id,
        producto: carritoLocal.detallesProducto,
        modelo: carritoLocal.modelo,
        tipo: carritoLocal.tipoProducto,
      })
      .from(carritoLocal)
      .where(inArray(carritoLocal.id, carritoIds));

    if (productosEnLocal.length > 1) {
      //Insertamos los productos 1 por 1
      for (const producto of productosEnLocal) {
        const productoParseado = JSON.parse(producto.producto);
        await db.insert(carrito).values({
          cliente: correo,
          tipoProducto: producto.tipo,
          modelo: producto.modelo,
          detallesProducto: producto.producto,
          precioTotal: productoParseado.precio * productoParseado.cantidad,
        });

        await deleteProductoCarritoLocal2({ id: producto.id });
      }
    } else {
      //Si solo hay un producto que guardar
      const productoParseado = JSON.parse(productosEnLocal[0].producto);
      await db.insert(carrito).values({
        cliente: correo,
        tipoProducto: productosEnLocal[0].tipo,
        modelo: productosEnLocal[0].modelo,
        detallesProducto: productosEnLocal[0].producto,
        precioTotal: productoParseado.precio * productoParseado.cantidad,
      });
      await deleteProductoCarritoLocal2({ id: productosEnLocal[0].id });
    }

    return true;
  } catch (error) {
    console.log(error);
    // Si ocurre algún error, devolvemos false
    return false;
  }
}

export async function registrarCarrito({
  producto,
  correo,
}: {
  producto: any;
  correo: string;
}) {
  try {
    await db.insert(carrito).values({
      cliente: correo,
      tipoProducto: producto.producto,
      modelo: producto.modelo,
      detallesProducto: JSON.stringify(producto),
      precioTotal: producto.precio * producto.cantidad,
    });
    // Si la inserción se realiza sin errores, devolvemos true
    return true;
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    return false;
  }
}

export async function registrarCarritoLocal({ producto }: { producto: any }) {
  //Lo que se guarde aqui solo durará una semana
  try {
    const insert = await db.insert(carritoLocal).values({
      tipoProducto: producto.producto,
      modelo: producto.modelo,
      detallesProducto: JSON.stringify(producto),
      precioTotal: producto.precio * producto.cantidad,
      fecha: new Date().toISOString(),
    });
    // Si la inserción se realiza sin errores, devolvemos true
    return {
      success: true,
      idGenerado: insert.lastInsertRowid,
    };
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    console.log(error);
    return {
      success: false,
    };
  }
}

//Funcion que guarda un pedido en la tabla Pedidos
type PedidoParams = {
  cliente: string;
  fecha: string;
  idProductos: string;
  tipoCliente: "logueado" | "sin loguear";
  tipoEnvio: "Recogida en tienda" | "Domicilio";
  tipoCompra: "Producto" | "Carrito";
  precioTotal: number;
  direccion: string[];
};

export async function registrarPedido({ datos }: { datos: PedidoParams }) {
  let direccionProporcionada = "no especificada";
  if (datos.tipoEnvio === "Domicilio") {
    direccionProporcionada = JSON.stringify(datos.direccion);
  }
  try {
    let productos;
    const ids = JSON.parse(datos.idProductos);
    
    //Comprobar si los productos estan guardados en el carrito o no
    if (datos.tipoCompra === "Carrito") {
      const consulta = await selectCarritoParaPedido(ids, datos.tipoCliente);
      productos = consulta.carrito;
      console.log("CONSULTA",productos)
    } else {
      productos = [ {"producto": datos.idProductos},];
    }

    await db.insert(pedidos).values({
      cliente: datos.cliente,
      fecha: datos.fecha,
      productos: JSON.stringify(productos),
      importe: datos.precioTotal / 100,
      tipoEnvio: datos.tipoEnvio,
      direccion: direccionProporcionada,
    });

    //Cuando ya tenemos los datos en la tabla pedidos, borramos los productos del carrito
    if (datos.tipoCompra === "Carrito") {
      await deleteCarritoComprado(ids, datos.tipoCliente);
    }

    return true;
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    console.log("Error en la insercion de un pedido", error);
    return false;
  }
}
