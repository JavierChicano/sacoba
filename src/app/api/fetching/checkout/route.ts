import { NextRequest, NextResponse } from 'next/server';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1POklHC4XHiMoaSuamUeG4JL",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/?success=true`,
      cancel_url: `${baseUrl}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
