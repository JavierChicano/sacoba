"use server";

import { usuarios } from "@/db/schema";
import { LeerDatosCookie } from "../perfil/cookiePerfil";
import { registrarCarrito } from "@/db/inserts";

export const InsertarCarrito = async (mesa: any) => {
  // Comprobar si la sesion esta iniciada
  try {
    const cookie = await LeerDatosCookie();
    //La sesion esta iniciada
    if (cookie.status) {
      console.log("sesion iniciada true");
      const insercion = await registrarCarrito({
        producto: mesa,
        tipoProduc: "mesa",
        correo: cookie.usuario.correoElectronico,
      });
      if (insercion) {
        return {
          success: true,
          message: "Producto guardado en el carrito con éxito",
        };
      }else{
        return {
            success: false,
            message: "Hubo un error al procesar la solicitud.",
          };
      }
    } else {
      //Si la sesion no esta iniciada
      return {
        success: true,
        usuario: "no iniciado",
        message:
          "Producto guardado en el carrito, inicia sesion para guardarlo",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Hubo un error al procesar la solicitud.",
    };
  }
};
