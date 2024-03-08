import { db } from "./index";
import { mesas, usuarios } from "./schema";

export async function POST(){
  const newUsuario = await db.insert(usuarios).values({
    correoElectronico: "jchicano43@gmail.com",
    nombre: "Javier",
    apellidos: "chicano",
    contraseña: "rubiote",
   }).execute();

  const newMesas = await db.insert(mesas).values({ 
    modelo: "LOMMA",
    imagen: "img",
    tipoBase: "4 patas",
    extension: "fija",
    materialTapa: "laminado",
    colorTapa: "blanco",
    dimensiones: "120x80",
    altura: "77, 92, 112",
    materialPata: "aluminio",
    colorPata: "blanco",
    precio: 250,
  }).execute();

  return new Response(JSON.stringify(newMesas)+JSON.stringify(newUsuario));
}
