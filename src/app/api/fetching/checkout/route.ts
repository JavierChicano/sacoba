import { NextRequest, NextResponse } from "next/server";
import { dividirProductos } from "../../creacionSesionesStripe";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const baseUrl = process.env.VERCEL_URL
? `https://${process.env.VERCEL_URL}`
: "http://localhost:3000";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const productosJuntos = body.productos;
  console.log(productosJuntos)
  const prueba = await dividirProductos(productosJuntos)

  try {
    //Creacion de la sesion de pago
    const session = await stripe.checkout.sessions.create({
      line_items: prueba,
      mode: "payment",
      success_url: `${baseUrl}/?success=true`,
      cancel_url: `${baseUrl}/`,
      custom_text: {
        submit: {
          message: 'Te enviaremos la factura al correo electronico',
        },
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

