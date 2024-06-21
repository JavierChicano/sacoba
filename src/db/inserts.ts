import { TipoConsulta, TipoUsuario } from "../../tipos/tipos";
import { db } from "./index";
import { carrito, consultas, pedidos, usuarios, carritoLocal } from "./schema";
import jwt from "jsonwebtoken";

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
      fechaCreacion: new Date().toISOString(),
    });
    // Si la inserción se realiza sin errores, devolvemos true
    return {
      success: true,
      idGenerado: insert.lastInsertRowid
    };
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    console.log(error)
    return {
      success: false,
    };
  }
}

export async function registrarPedido({
  session,
  fecha,
}: {
  session: any;
  fecha: string;
}) {
  let tipoEnvioPedido;
  //Verificar que tipo de envio es
  if (session.shipping_details && session.shipping_details.address) {
    tipoEnvioPedido = "A domicilio";
  } else {
    tipoEnvioPedido = "En tienda";
  }
  try {
    await db.insert(pedidos).values({
      cliente: session.customer_details.email,
      fecha: fecha,
      productos: JSON.parse(session.metadata.productos),
      importe: session.amount_total / 100,
      tipoEnvio: tipoEnvioPedido,
      direccion: session.customer_details.address,
    });

    // Si la inserción se realiza sin errores, devolvemos true
    return true;
  } catch (error) {
    // Si ocurre algún error, devolvemos false
    console.log(error);
    return false;
  }
}
