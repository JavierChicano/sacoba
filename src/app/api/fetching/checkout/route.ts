import { NextRequest, NextResponse } from "next/server";
import { dividirProductos } from "../../creacionSesionesStripe";
import { LeerDatosCookie } from "@/app/components/perfil/cookiePerfil";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const productosJuntos = body.productos;
  const productosDivididos = await dividirProductos(productosJuntos);
  let correoElectonico = undefined;

  //Si el usuario esta logueado usamos su correo
  const user = await LeerDatosCookie();
  if (user.status) {
    correoElectonico = user.usuario.correoElectronico;
  }

  try {
    //Creacion de la sesion de pago
    const session = await stripe.checkout.sessions.create({
      customer_email: correoElectonico,
      line_items: productosDivididos,
      mode: "payment",
      success_url: `${baseUrl}/?success=true`,
      cancel_url: `${baseUrl}/`,
      custom_text: {
        submit: {
          message: "Te enviaremos la factura al correo electronico",
        },
        terms_of_service_acceptance: {
          message: `Acepto las [condiciones de venta](${baseUrl}/CondicionesVenta)`,
        },
      },
      consent_collection: {
        terms_of_service: "required",
      },
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
