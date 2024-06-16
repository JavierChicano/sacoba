import { NextRequest, NextResponse } from "next/server";
import { generarDescripcionPack, generarImagenesPack } from "../../funcionesInfoCheckout";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const baseUrl = process.env.VERCEL_URL
? `https://${process.env.VERCEL_URL}`
: "http://localhost:3000";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const pack = body.pack;
  console.log(pack)
  const imagenes = generarImagenesPack(pack)
  console.log(imagenes)

  try {
    //Creacion del producto
    const productoCreado = await stripe.products.create({
      name: `${pack.producto}`,
      description: `${generarDescripcionPack(pack)}`,
      images: imagenes
    });

    //Creacion del precio el producto
    const price = await stripe.prices.create({
      currency: 'eur',
      unit_amount: `${pack.precio*100}`,
      product: `${productoCreado.id}`,
      nickname: 'Precio del pack',
    });
    
    //Creacion de la sesion de pago
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: `${price.id}`,
          quantity: `${pack.cantidad}`,
        }
      ],
      mode: "payment",
      success_url: `${baseUrl}/?success=true`,
      cancel_url: `${baseUrl}/Packs`,
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

