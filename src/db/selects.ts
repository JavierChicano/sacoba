import { eq } from "drizzle-orm";
import { db } from ".";
import { bancos, mesas, packs, sillas } from "./schema";

//Selects de mesas
export async function selectsMesasTendencia() {
  const todasMesas = await db.select().from(mesas).where(eq(mesas.tendencia, true));
  return todasMesas;
}
export async function selectsMesasNovedad() {
  const todasMesas = await db.select().from(mesas).where(eq(mesas.nuevo, true));
  return todasMesas;
}
export async function selectsMesasModelo() {
  const todasMesas = await db.selectDistinct().from(mesas).orderBy(mesas.id).groupBy(mesas.modelo);
  return todasMesas;
}
export async function selectsMesasTotales() {
  const todasMesas = await db.select().from(mesas);
  return todasMesas;
}

//Selects de sillas
export async function selectsSillasTendencia() {
  const todasSillas = await db.select().from(sillas).where(eq(sillas.tendencia, true));
  return todasSillas;
}
export async function selectsSillasNovedad() {
  const todasSillas = await db.select().from(sillas).where(eq(sillas.nuevo, true));
  return todasSillas;
}
export async function selectsSillasModelo() {
  const todasSillas = await db.selectDistinct().from(sillas).orderBy(sillas.id).groupBy(sillas.modelo);
  return todasSillas;
}
export async function selectsSillasTotales() {
  const todasSillas = await db.select().from(sillas);
  return todasSillas;
}

//Selects de bancos
export async function selectsBancosTotales() {
  const todosBancos = await db.selectDistinct().from(bancos);
  return todosBancos;
}
export async function selectsBancosModelo() {
  const todosBancos = await db.selectDistinct().from(bancos).orderBy(bancos.id).groupBy(bancos.modelo);
  return todosBancos;
}

export async function selectsBancosPrueba(modelo: string) {
  const todosBancos = await db.selectDistinct().from(bancos).where(eq(bancos.modelo, modelo));
  return todosBancos;
}

// Selects de packs
export async function selectsPacksTotales(){
  const todosPacks = await db.selectDistinct().from(packs);
  return todosPacks;
}
export async function selectsPacksModelo(){
  const todosPacks = await db.selectDistinct().from(packs).where(eq(packs.materialTapa, "laminado ECO"));
  return todosPacks;
}