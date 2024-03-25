import { eq } from "drizzle-orm";
import { db } from ".";
import { bancos, mesas } from "./schema";

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

//Selects de bancos
export async function selectsBancosTotales() {
  const todosBancos = await db.selectDistinct().from(bancos);
  return todosBancos;
}
export async function selectsBancosModelo() {
  const todosBancos = await db.selectDistinct().from(bancos).orderBy(bancos.id).groupBy(bancos.modelo);
  return todosBancos;
}
