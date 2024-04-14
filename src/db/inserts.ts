import { TipoUsuario } from "../../tipos/tipos";
import { db } from "./index";
import { usuarios } from "./schema";

export async function registrarUsuario({usuario}:{usuario: TipoUsuario}) {
    const newUsuario = await db.insert(usuarios).values({
        correoElectronico: usuario.correoElectronico,
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        contraseña: usuario.contraseña,
    })
  }
  

