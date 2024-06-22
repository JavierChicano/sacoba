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
      // Handle the checkout.session.completed event
      await registrarPedido({
        datos: {
          cliente: session.customer_details.email,
          fecha: getDate(session),
          idProductos: session.metadata.ids, 
          tipoCliente: session.metadata.tipo,
          tipoEnvio: session.metadata.tipoEnvio,
          precioTotal: session.amount_total,
          direccion: session.customer_details.address,
        },
      });

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
  // Crear la fecha en UTC
  let fecha = new Date(session.created * 1000); // multiplicamos por 1000 para convertir segundos a milisegundos
  
  // Obtener la diferencia horaria para Madrid
  let offset = 1; // CET (UTC+1)
  
  // Determinar si la fecha está en horario de verano (último domingo de marzo a último domingo de octubre)
  let startDST = new Date(fecha.getFullYear(), 2, 31); // último día de marzo
  let endDST = new Date(fecha.getFullYear(), 9, 31); // último día de octubre
  
  // Ajustar para el último domingo de marzo
  startDST.setDate(31 - (startDST.getDay() || 7));
  // Ajustar para el último domingo de octubre
  endDST.setDate(31 - (endDST.getDay() || 7));
  
  if (fecha >= startDST && fecha < endDST) {
    offset = 2; // CEST (UTC+2)
  }
  
  // Ajustar la fecha y hora para la diferencia horaria
  fecha.setHours(fecha.getHours() + offset);
  
  // Obtener los componentes de la fecha y hora en la zona horaria local (española)
  let year = fecha.getFullYear();
  let month = ("0" + (fecha.getMonth() + 1)).slice(-2); 
  let day = ("0" + fecha.getDate()).slice(-2);
  let hours = ("0" + fecha.getHours()).slice(-2);
  let minutes = ("0" + fecha.getMinutes()).slice(-2);
  
  // Formatear la fecha y hora en el formato deseado ("yyyy-MM-dd HH:mm")
  let fechaFormateada = `${year}-${month}-${day} ${hours}:${minutes}`;
  return fechaFormateada;
}