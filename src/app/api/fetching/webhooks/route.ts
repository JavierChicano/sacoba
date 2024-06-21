import { registrarPedido } from "@/db/inserts";
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const sigHeader = req.headers.get("stripe-signature");
  const endpointSecret = process.env.STRIPE_SECRET_KEY_WEBHOOK;
  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sigHeader, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json(
      { error: "Invalid payload or signature" },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      let fecha = getDate(session)
      console.log("cliente", session.customer_details.email);
      console.log("fecha", fecha);
      console.log("address", session.customer_details.address);

      console.log("precio", session.amount_total);
      console.log("detallesProducto",session.metadata.productos);
      console.log("tipoCliente", session.metadata.tipo);
      console.log("idsProductos", session.metadata.ids);
      // Handle the checkout.session.completed event
      await registrarPedido({ session, fecha });
      console.log("Checkout session completed:", session);
      break;
    // Handle other event types if needed
    default:
      console.log(`Unhandled event type: ${event.type}`);
      break;
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

function getDate(session: any) {
  let fecha = new Date(session.created * 1000); // multiplicamos por 1000 para convertir segundos a milisegundos

  // Obtener los componentes de la fecha y hora en la zona horaria local (española)
  let year = fecha.getFullYear();
  let month = ("0" + (fecha.getMonth() + 1)).slice(-2); // los meses son base 0, así que añadimos 1
  let day = ("0" + fecha.getDate()).slice(-2);
  let hours = ("0" + fecha.getHours()).slice(-2);
  let minutes = ("0" + fecha.getMinutes()).slice(-2);

  // Formatear la fecha y hora en el formato deseado ("yyyy-MM-dd HH:mm")
  let fechaFormateada = `${year}-${month}-${day} ${hours}:${minutes}`;
  return fechaFormateada
}
