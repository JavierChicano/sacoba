import { db } from "./index";
import { mesas, usuarios, colores, sillas } from "./schema";

export async function insertarMesas() {
  try {

     const newMesas = await db.insert(mesas).values({
       modelo: "LOMMA",
       tipoBase: "4 patas",
       materialTapa: "laminado",
       colorTapa: "blanco",
       dimensiones: "120x80",
       altura: "77, 92, 112",
       materialPata: "aluminio",
       colorPata: "blanco",
       precio: 250,
     })
    
  } catch (error) {
    console.error("Error al insertar mesas:", error);
    return new Response("Error al insertar mesas", { status: 500 });
  }
}