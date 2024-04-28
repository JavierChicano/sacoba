import { eq } from "drizzle-orm";
import { db } from ".";
import { TipoUsuarioExtended } from "../../tipos/tipos";
import { usuarios } from "./schema";

export async function actualizarUsuario({usuario}:{usuario: TipoUsuarioExtended}) {
    try {
        await db.update(usuarios).set({
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            telefono: usuario.telefono,
            domicilio: usuario.domicilio,
            cp: usuario.cp,
            provincia: usuario.provincia,
        }).where(eq(usuarios.correoElectronico, usuario.correoElectronico));

        // Si la inserción se realiza sin errores, devolvemos true
        return true;
    } catch (error) {
        // Si ocurre algún error, devolvemos false
        return false;
    }
}
