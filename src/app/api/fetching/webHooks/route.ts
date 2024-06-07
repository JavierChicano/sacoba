// import { Request, Response } from "express";
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// //WEBHOOK; creacion de eventos
// export async function POST(req: NextRequest, res: NextResponse) {
//   const payload = await req.text();
//   const response = JSON.parse(payload);

//   const sig = res.headers.get("Stripe");

//   const dateTime = new Date(response?.created * 1000).toLocaleDateString();
//   const timeString = new Date(response?.created * 1000).toLocaleDateString();

//   try {
//     let event = stripe.webhooks.constructEvent(
//       payload,
//       sig!,
//       process.env.STRIPE_SECRET_KEY!
//     );

//     return NextResponse.json({ status: "Sucess", event: event.type });
//   } catch (error) {
//     return NextResponse.json({ status: "Failed", error });
//   }
// }
