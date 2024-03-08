import { db } from "./index";
import { mesas } from "./schema";

export async function POST(){
  const newMesas = await db.insert(mesas).values({ 
    modelo: "LOMMA",
    imagen: "img",
    tipoBase: "4 patas",
    extension: "fija",
    materialTapa: "laminado",
    colorTapa: "blanco",
    dimensiones: "80x40",
    altura: "77, 92, 112",
    materialPata: "aluminio",
    precio: "170"
  }).execute();

  
  return new Response(JSON.stringify(newMesas));
}
