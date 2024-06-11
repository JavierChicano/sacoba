import { eq, inArray, and } from "drizzle-orm";
import { db } from ".";
import { bancos, colores, mesas, packs, sillas } from "./schema";

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
    .select()
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
export async function selectsColoresSillas(modelo: string) {
  const todasSillas = await db
    .select({
      materialAsiento: sillas.materialAsiento,
    })
    .from(sillas)
    .where(eq(sillas.modelo, modelo));

  const cadena = todasSillas[0].materialAsiento;
  const todosColores = await parcheConsulta(cadena);
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
    .where(inArray(colores.modelo, ["tapizado nvA", "tapizado nvC"]));
  return todosColores;
}

export async function selectsColoresBastidorBancos() {
  const todosColores = await db
    .select()
    .from(colores)
    .where(inArray(colores.modelo, ["laminado", "barniz", "laca"]));
  return todosColores;
}

export async function selectsColoresMesas(modelo: string) {
  const todasMesas = await db
    .select({
      materialTapa: mesas.materialTapa,
    })
    .from(mesas)
    .where(eq(mesas.modelo, modelo));

  const valoresMesas = todasMesas.map((mesa) => mesa.materialTapa);

  const todosColores = await db
    .select()
    .from(colores)
    .where(inArray(colores.modelo, valoresMesas));
  return todosColores;
}

async function parcheConsulta(cadena: string) {
  switch (cadena) {
    case "tapizado nvC, tapizado nvA":
      const coloresOpcion0 = await db
        .select()
        .from(colores)
        .where(inArray(colores.modelo, ["tapizado nvC", "tapizado nvA"]));
      return coloresOpcion0;

    case "tapizado nvC, tapizado nvA, laca":
      const coloresOpcion1 = await db
        .select()
        .from(colores)
        .where(
          inArray(colores.modelo, ["tapizado nvC", "tapizado nvA", "laca"])
        );
      return coloresOpcion1;
    case "tapizado nvC, tapizado nvA, laca, barniz":
      const coloresOpcion2 = await db
        .select()
        .from(colores)
        .where(
          inArray(colores.modelo, [
            "tapizado nvC",
            "tapizado nvA",
            "laca",
            "barniz",
          ])
        );
      return coloresOpcion2;
    case "tapizado nvC, tapizado nvA, laminado, laca, barniz":
      const coloresOpcion3 = await db
        .select()
        .from(colores)
        .where(
          inArray(colores.modelo, [
            "tapizado nvC",
            "tapizado nvA",
            "laminado",
            "laca",
            "barniz",
          ])
        );
      return coloresOpcion3;

    default:
      throw new Error("Valor no reconocido");
  }
}
