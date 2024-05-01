import { TipoConsulta, TipoUsuario } from "../../tipos/tipos";
import { db } from "./index";
import { consultas, usuarios } from "./schema";

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

export async function registrarConsulta({consulta}:{consulta: TipoConsulta}) {
    try {
        await db.insert(consultas).values({
            correoElectronico: consulta.correoElectronico,
            nombre: consulta.nombre,
            motivo: consulta.motivo,
            consulta: consulta.consulta,
        });
        // Si la inserción se realiza sin errores, devolvemos true
        return true;
    } catch (error) {
        // Si ocurre algún error, devolvemos false
        return false;
    }
}
