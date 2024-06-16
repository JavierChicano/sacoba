const baseUrl = process.env.VERCEL_URL
? `https://${process.env.VERCEL_URL}`
: "http://localhost:3000";

export function generarDescripcionPack(pack: any){
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
  
  export function generarImagenesPack(pack: any){
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