import { db } from "./index";
import { mesas, usuarios } from "./schema";

export async function insertarMesas() {
  try {
    const newUsuario = await db.insert(usuarios).values({
      correoElectronico: "jchicano43@gmail.com",
      nombre: "Javier",
      apellidos: "chicano",
      contraseña: "rubiote",
    }).execute();

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
    }).execute();

    return new Response(JSON.stringify(newMesas) + JSON.stringify(newUsuario));
  } catch (error) {
    console.error("Error al insertar mesas:", error);
    return new Response("Error al insertar mesas", { status: 500 });
  }
}
insertarMesas();