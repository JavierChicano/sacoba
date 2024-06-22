import { NextRequest, NextResponse } from "next/server";
import { dividirProductos } from "../../creacionSesionesStripe";
import { LeerDatosCookie } from "@/app/components/perfil/cookiePerfil";
import { sacarIdProductos } from "../../funcionesInfoCheckout";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


export async function POST(req: NextRequest) {
  const body = await req.json();
  const productosJuntos = body.productos.productos;
  const productosDivididos = await dividirProductos(productosJuntos);
  let correoElectonico = undefined;
  let tipoCliente;
  let idsProductos;
  //Si el usuario esta logueado usamos su correo
  const user = await LeerDatosCookie();
  if (user.status) {
    correoElectonico = user.usuario.correoElectronico;
    tipoCliente = "logueado"
  }else{
    tipoCliente = "sin loguear"
  }

  //Comprobamos de donde viene la compra
  if(body.procedencia === "Carrito"){
    idsProductos = sacarIdProductos(productosJuntos)
  }else{
    //Si viene de "Productos" pasamos el producto no el id
    idsProductos = JSON.stringify(productosJuntos)
  }
  
  try {
    //Creacion de la sesion de pago
    const session = await stripe.checkout.sessions.create({
      customer_email: correoElectonico,
      line_items: productosDivididos,
      mode: "payment",
      success_url: `https://www.sacoba.es/Success`,
      cancel_url: `https://www.sacoba.es/`,
      custom_text: {
        submit: {
          message: "Te enviaremos la factura al correo electronico",
        },
        terms_of_service_acceptance: {
          message: `Acepto las [condiciones de venta](https://www.sacoba.es/CondicionesVenta)`,
        },
      },
      consent_collection: {
        terms_of_service: "required",
      },
      metadata: {
        tipo: tipoCliente,
        ids: idsProductos,
        tipoEnvio: "Recogida en tienda",
        tipoCompra: body.procedencia,
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
