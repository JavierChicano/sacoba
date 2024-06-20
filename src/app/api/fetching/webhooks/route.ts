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
    console.log(event)
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: "Invalid payload or signature" }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      let fecha = new Date(session.created * 1000);
      console.log("cliente", session.customer_details.email);
      console.log("fecha", fecha);
      console.log("address", session.customer_details.address);


      console.log("precio", session.amount_total)
      console.log("detallesProducto", JSON.parse(session.metadata.productos))
      // Handle the checkout.session.completed event
      await registrarPedido(session)
      console.log('Checkout session completed:', session);
      break;
    // Handle other event types if needed
    default:
      console.log(`Unhandled event type: ${event.type}`);
      break;
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
