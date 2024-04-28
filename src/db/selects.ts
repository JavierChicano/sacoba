import { eq, inArray } from "drizzle-orm";
import { db } from ".";
import { bancos, colores, mesas, packs, sillas, usuarios } from "./schema";
import bcrypt from "bcrypt";

//Selects de mesas
export async function selectsMesasTendencia() {
  const todasMesas = await db
    .select()
    .from(mesas)
    .where(eq(mesas.tendencia, true));
  return todasMesas;
}
export async function selectsMesasNovedad() {
  const todasMesas = await db.select().from(mesas).where(eq(mesas.nuevo, true));
  return todasMesas;
}
export async function selectsMesasModelo() {
  const todasMesas = await db
    .selectDistinct()
    .from(mesas)
    .orderBy(mesas.id)
    .groupBy(mesas.modelo);
  return todasMesas;
}
export async function selectsMesaSeleccionada(modelo: string) {
  const todasMesas = await db
    .selectDistinct()
    .from(mesas)
    .where(eq(mesas.modelo, modelo));
  return todasMesas;
}

//Selects de sillas
export async function selectsSillasTendencia() {
  const todasSillas = await db
    .select()
    .from(sillas)
    .where(eq(sillas.tendencia, true));
  return todasSillas;
}
export async function selectsSillasNovedad() {
  const todasSillas = await db
    .select()
    .from(sillas)
    .where(eq(sillas.nuevo, true));
  return todasSillas;
}
export async function selectsSillasModelo() {
  const todasSillas = await db
    .selectDistinct()
    .from(sillas)
    .orderBy(sillas.id)
    .groupBy(sillas.modelo);
  return todasSillas;
}
export async function selectsSillaSeleccionada(modelo: string) {
  const todasSillas = await db
    .select()
    .from(sillas)
    .where(eq(sillas.modelo, modelo));
  return todasSillas;
}

//Selects de bancos
export async function selectsBancosModelo() {
  const todosBancos = await db
    .selectDistinct()
    .from(bancos)
    .orderBy(bancos.id)
    .groupBy(bancos.modelo);
  return todosBancos;
}

export async function selectsBancoSeleccionado(modelo: string) {
  const todosBancos = await db
    .selectDistinct()
    .from(bancos)
    .where(eq(bancos.modelo, modelo));
  return todosBancos;
}

// Selects de packs
export async function selectsPacksModelo() {
  const todosPacks = await db
    .selectDistinct()
    .from(packs)
    .where(eq(packs.materialTapa, "laminado ECO"));
  return todosPacks;
}

export async function selectsPackSeleccionado(modelo: string) {
  const todosPacks = await db
    .select()
    .from(packs)
    .where(eq(packs.modelo, modelo));
  return todosPacks;
}

//Selects de colores
export async function selectsColoresSillas() {
  const todosColores = await db
    .select()
    .from(colores)
    .where(
      inArray(colores.modelo, [
        "laca",
        "laminado",
        "barniz",
        "tapizado nvC",
        "tapizado nvA",
      ])
    );
  return todosColores;
}

export async function selectsColoresPacks() {
  const todosColores = await db
    .select()
    .from(colores)
    .where(
      inArray(colores.modelo, ["cristal 3mm", "laminado", "laminado ECO"])
    );
  return todosColores;
}

export async function selectsColoresTapizadoBancos() {
  const todosColores = await db
    .select()
    .from(colores)
    .where(
      inArray(colores.modelo, ["tapizado nvA", "tapizado nvC"])
    );
  return todosColores;
}

export async function selectsColoresBastidorBancos() {
  const todosColores = await db
    .select()
    .from(colores)
    .where(
      inArray(colores.modelo, ["laminado", "barniz", "laca"])
    );
  return todosColores;
}

//Select usuario logueado
export async function selectComprobarUsuario(
  email: string,
  contraseña: string
) {
  try {
    // Realizar una consulta SQL para seleccionar el usuario con el correo electrónico dado
    const usuario = await db
      .select()
      .from(usuarios)
      .where(eq(usuarios.correoElectronico, email))
      .limit(1);

    if (usuario && usuario.length === 1) {
      const comparar = bcrypt.compareSync(contraseña, usuario[0].contraseña);
      if (comparar) {
        //Para pasar el usuario como objeto pero sin el campo contraseña
        const { contraseña, ...user } = usuario[0];
        return {
          success: true,
          usuario: user,
        };
      } else {
        //La contraseña no es valida
        return false;
      }
    } else {
      // Si no se encontró un usuario, devolver false
      return false;
    }
  } catch (error: any) {
    //Si salta un error en la consulta
    return false;
  }
}
