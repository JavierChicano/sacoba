import { eq } from "drizzle-orm";
import { db } from ".";
import { mesas } from "./schema";

export async function selectsMesasTendencia() {
  const todasMesas = await db.select().from(mesas).where(eq(mesas.tendencia, true));
  return todasMesas
}
export async function selectsMesasNovedad() {
  const todasMesas = await db.select().from(mesas).where(eq(mesas.nuevo, true));
  return todasMesas
}
export async function selectsMesasTotales() {
  const todasMesas = await db.select().from(mesas);
  return todasMesas
}
