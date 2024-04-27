import { TipoUsuario } from "../../tipos/tipos";
import { db } from "./index";
import { usuarios } from "./schema";

export async function registrarUsuario({usuario}:{usuario: TipoUsuario}) {
    try {
        await db.insert(usuarios).values({
            correoElectronico: usuario.correoElectronico,
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            contraseña: usuario.contraseña,
        });
        // Si la inserción se realiza sin errores, devolvemos true
        return true;
    } catch (error) {
        // Si ocurre algún error, devolvemos false
        return false;
    }
}
