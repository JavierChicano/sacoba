import { cookies } from "next/headers";
import {
    generarDescripcionBanco,
  generarDescripcionMesa,
  generarDescripcionPack,
  generarDescripcionSilla,
  generarImagenesPack,
} from "./funcionesInfoCheckout";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const baseUrl =`https://www.sacoba.es`

export async function dividirProductos(productos: any) {
  // Array para guardar los datos
  const resultados = [];

  //Esto va a coger todos los objetos que estan mezclados en el carrito
  //Y los va a dividir en funcion del tipo de producto al q pertenecen
  for (const producto of productos) {
    try {
      switch (producto.producto) {
        case "Pack":
          //Creacion del producto
          const crearProductoPack = await stripe.products.create({
            name: `${producto.producto}`,
            description: `${generarDescripcionPack(producto)}`,
            images: generarImagenesPack(producto),
          });

          //Creacion del precio el producto
          const priceProductoPack = await stripe.prices.create({
            currency: "eur",
            unit_amount: `${producto.precio * 100}`,
            product: `${crearProductoPack.id}`,
            nickname: "Precio del pack",
          });

          // Guardar los datos en el array
          resultados.push({
            price: priceProductoPack.id,
            quantity: producto.cantidad,
          });
          break;
        case "Mesa":
          const modeloMesa = producto.modelo.toLowerCase();
          //Creacion del producto
          const crearProductoMesa = await stripe.products.create({
            name: `${producto.producto}`,
            description: `${generarDescripcionMesa(producto)}`,
            images: [`${baseUrl}/productos/mesas/${modeloMesa.toLowerCase()}.png`],
          });

          //Creacion del precio el producto
          const priceProductoMesa = await stripe.prices.create({
            currency: "eur",
            unit_amount: `${producto.precio * 100}`,
            product: `${crearProductoMesa.id}`,
            nickname: "Precio de la mesa",
          });
          // Guardar los datos en el array
          resultados.push({
            price: priceProductoMesa.id,
            quantity: producto.cantidad,
          });
          break;
        case "Silla":
          const modeloSilla = producto.modelo.toLowerCase();
          //Creacion del producto
          const crearProductoSilla = await stripe.products.create({
            name: `${producto.producto}`,
            description: `${generarDescripcionSilla(producto)}`,
            images: [`${baseUrl}/productos/sillas/${modeloSilla.toLowerCase()}.png`],
          });

          //Creacion del precio el producto
          const priceProductoSilla = await stripe.prices.create({
            currency: "eur",
            unit_amount: `${producto.precio * 100}`,
            product: `${crearProductoSilla.id}`,
            nickname: "Precio de la silla",
          });
          // Guardar los datos en el array
          resultados.push({
            price: priceProductoSilla.id,
            quantity: producto.cantidad,
          });
          break;
        case "Banco":
          const modeloBanco = producto.modelo.toLowerCase();
          //Creacion del producto
          const crearProductoBanco = await stripe.products.create({
            name: `${producto.producto}`,
            description: `${generarDescripcionBanco(producto)}`,
            images: [`${baseUrl}/productos/bancos/${modeloBanco.toLowerCase()}.png`],
          });

          //Creacion del precio el producto
          const priceProductoBanco = await stripe.prices.create({
            currency: "eur",
            unit_amount: `${producto.precio * 100}`,
            product: `${crearProductoBanco.id}`,
            nickname: "Precio de la silla",
          });
          // Guardar los datos en el array
          resultados.push({
            price: priceProductoBanco.id,
            quantity: producto.cantidad,
          });
          break;
        default:
          console.log("Producto no reconocido:", producto);
      }
    } catch (error) {
      console.error("Error al dividir los productos", error);
    }
  }
  return resultados;
}

export async function productoEnvio() {
  //Creacion del producto
  const crearProductoEnvio = await stripe.products.create({
   name: `Envio`,
   description: `Coste del envio a domicilio, incluye el montaje del producto`,
   images: [`${baseUrl}/imgEnvio.png`],
 });

 //Creacion del precio del envio 40€
 const priceProductoEnvio = await stripe.prices.create({
   currency: "eur",
   unit_amount: `${40 * 100}`,
   product: `${crearProductoEnvio.id}`,
   nickname: "Precio del envio a domicilio",
 });

 // Guardar los datos 
 return {
   price: priceProductoEnvio.id,
   quantity: 1,
 }
}

