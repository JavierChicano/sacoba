import { dividirProductos, productoEnvio } from "@/app/api/creacionSesionesStripe";
import { sacarIdProductos } from "@/app/api/funcionesInfoCheckout";
import { LeerDatosCookie } from "@/app/components/perfil/cookiePerfil";
import { metadata } from "@/app/layout";
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const productosJuntos = body.productos;
  const productosDivididos = await dividirProductos(productosJuntos)
  //Sumamos el coste del envio al pedido
  const envio = await productoEnvio()
  productosDivididos.push(envio)
  let correoElectonico = undefined;
  let tipoCliente

  //Si el usuario esta logueado usamos su correo
  const user = await LeerDatosCookie();
  if (user.status) {
    correoElectonico = user.usuario.correoElectronico;
    tipoCliente = "logueado"
  }else{
    tipoCliente = "sin loguear"
  }
  
  try {
    //Creacion de la sesion de pago
    const session = await stripe.checkout.sessions.create({
      customer_email: correoElectonico,
      line_items: productosDivididos,
      mode: "payment",
      success_url:  `https://www.sacoba.es/Success`,
      cancel_url: `https://www.sacoba.es/`,
      shipping_address_collection: {
        allowed_countries: ["ES"],
      },
      custom_text: {
        submit: {
          message: "Te enviaremos la factura al correo electronico",
        },
        terms_of_service_acceptance: {
          message: `Acepto las [condiciones de venta](${baseUrl}/CondicionesVenta)`,
        },
      },      
      consent_collection: {
        terms_of_service: 'required',
      },
      metadata: {
        tipo: tipoCliente,
        ids: sacarIdProductos(productosJuntos),
        tipoEnvio: "Domicilio"
      }
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

