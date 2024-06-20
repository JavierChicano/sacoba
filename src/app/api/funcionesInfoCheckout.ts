const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

//Funciones para generar el pack
export function generarDescripcionPack(pack: any) {
  var numSillas = 0;
  var formato = "";
  if (pack.packElegido === "Mesa y 2 Sillas") {
    numSillas = 2;
    formato = "sillas";
  } else if (pack.packElegido === "Mesa y 4 Sillas") {
    numSillas = 4;
    formato = "sillas";
  } else if (pack.packElegido === "Mesa y 2 Taburetes") {
    numSillas = 2;
    formato = "taburetes con respaldo";
  } else if (pack.packElegido === "Mesa y 4 Taburetes") {
    numSillas = 4;
    formato = "taburetes con respaldo";
  }

  //Generar la descripcion del producto adecuada
  if (pack.packElegido === "Mesa") {
    return `Pack ${pack.packElegido} modelo ${pack.modelo}. Dimensiones de la mesa ${pack.dimension}, material ${pack.acabado}, color ${pack.color}.`;
  } else {
    return `Pack "${pack.packElegido}", modelo ${
      pack.modelo
    }. Dimensiones de la mesa ${pack.dimension}, material ${
      pack.acabado
    }, color ${pack.color}. ${numSillas} ${formato} del modelo ${
      pack.modeloSilla
    } ${
      pack.cantidadSillasExtra !== 0
        ? `más ${pack.cantidadSillasExtra} extra,`
        : ","
    } material ${pack.tapizadoSilla}, color ${pack.colorSilla}.`;
  }
}

export function generarImagenesPack(pack: any) {
  var arrayImagenes = [];
  const modelo = pack.modelo.toLowerCase();
  const modeloSilla = pack.modeloSilla.toLowerCase();
  if (pack.packElegido === "Mesa") {
    arrayImagenes = [`${baseUrl}/productos/packs/${modelo.toLowerCase()}.png`];
  } else {
    arrayImagenes = [
      `${baseUrl}/productos/packs/${modelo.toLowerCase()}.png`,
      `${baseUrl}/productos/packs/${modeloSilla.toLowerCase()}.png`,
    ];
  }
  return arrayImagenes;
}

//Funciones para generar una mesa
export function generarDescripcionMesa(mesa: any) {
  //Generar la descripcion del producto adecuada
  return `Mesa, modelo ${mesa.modelo}. Dimensiones de la mesa ${mesa.dimension}, material ${mesa.acabado} de color ${mesa.color} y altura de ${mesa.altura}cm`;
}

//Funciones para generar una silla
export function generarDescripcionSilla(silla: any) {
  //Generar la descripcion del producto adecuada
  return `${silla.formato}, modelo ${silla.modelo}, material ${silla.acabado} de color ${silla.color} y con el soporte en ${silla.colorPata}`;
}

//Funciones para generar un banco
export function generarDescripcionBanco(banco: any) {
  //Generar la descripcion del producto adecuada
  return `Banco de cocina, modelo ${banco.modelo}, con ${banco.modulos.length} modulos, con ${banco.acabadoTapizado} de color ${banco.colorTapizado} y con un bastidor de ${banco.acabadoBastidor} de color ${banco.colorBastidor} `;
}
