import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const baseUrl = process.env.VERCEL_URL
? `https://${process.env.VERCEL_URL}`
: "http://localhost:3000";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const pack = body.pack;
  console.log(body.pack)

  console.log(pack)
  const imagenes = generarImagenes(pack)
  console.log(imagenes)

  try {
    //Creacion del producto
    const productoCreado = await stripe.products.create({
      name: `${pack.producto}`,
      description: `${generarDescripcion(pack)}`,
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
      shipping_address_collection: {
        allowed_countries: ['ES'], 
      },
      custom_fields: [
        {
          key: "tipoEnvio",
          label: {
            type: "custom",
            custom: "Tipo de Envío",
          },
          type: "text",
        },
      ],
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

function generarDescripcion(pack: any){
  var numSillas = 0
  var formato = ""
  if(pack.packElegido === 'Mesa y 2 Sillas' ){
    numSillas = 2
    formato = "sillas"
  }else if(pack.packElegido === 'Mesa y 4 Sillas' ){
    numSillas = 4
    formato = "sillas"
  }else if(pack.packElegido === 'Mesa y 2 Taburetes'){
    numSillas = 2
    formato = "taburetes con respaldo"
  }else if(pack.packElegido === 'Mesa y 4 Taburetes'){
    numSillas = 4
    formato = "taburetes con respaldo"
  }

  //Generar la descripcion del producto adecuada
  if (pack.packElegido === 'Mesa') {
    return `Pack ${pack.packElegido} modelo ${pack.modelo}. Dimensiones de la mesa ${pack.dimension}, material ${pack.acabado}, color ${pack.color}.`;
} else {
    return `Pack "${pack.packElegido}", modelo ${pack.modelo}. Dimensiones de la mesa ${pack.dimension}, material ${pack.acabado}, color ${pack.color}. ${numSillas} ${formato} del modelo ${pack.modeloSilla} ${pack.cantidadSillasExtra !== 0 ? `más ${pack.cantidadSillasExtra} extra,` : ","} material ${pack.tapizadoSilla}, color ${pack.colorSilla}.`;
}
}

function generarImagenes(pack: any){
  var arrayImagenes = []
  const modelo = pack.modelo.toLowerCase()
  const modeloSilla = pack.modeloSilla.toLowerCase()
  if(pack.packElegido === 'Mesa' ){
    arrayImagenes = [`${baseUrl}/productos/packs/${modelo}.png`]
  }else {
    arrayImagenes = [`${baseUrl}/productos/packs/${modelo}.png`, `${baseUrl}/productos/packs/${modeloSilla}.png`]
  }
  return arrayImagenes
}