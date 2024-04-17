import {
  integer,
  sqliteTable, text,
} from "drizzle-orm/sqlite-core";

export const usuarios = sqliteTable("usuarios", {
  correoElectronico: text("correoElectronico").primaryKey(),
  nombre: text("nombre").notNull(),
  apellidos: text("apellidos").notNull(),
  contraseña: text("contraseña").notNull(),
});

export const mesas = sqliteTable("mesas", {
  id: integer("id").primaryKey({autoIncrement: true}),
  modelo: text("modelo").notNull(),
  imagen: text("imagen").notNull(),
  tipoBase: text("tipoBase", { enum: ["4 patas", "peninsula", "pie central", "alas"]}).notNull(),
  extension: text("extension", { enum: ["de libro", "fija", "extensible"]}),
  tipoAmpliable: text("tipoAmpliable", { enum: ["lateral", "frontal"]}),
  auxiliar: text("auxiliar", { enum: ["simple", "doble"]}),
  materialTapa: text("materialTapa", { enum: [
    "laca",
    "barniz",
    "laminado",
    "cristal 3mm",
    "cristal 8mm",
    "cristal 8mm extraclaro",
    "silestone g1",
    "dekton g1",
  ]}).notNull(),
  dimensiones: text("dimensiones").notNull(),
  altura: text("altura").notNull(),
  costeAltura: text("costeAltura"),
  materialPata: text("materialPata", { enum: ["madera", "aluminio"]}).notNull(),
  colorPata: text("colorPata").notNull(), 
  tendencia: integer("tendencia", {mode: 'boolean'}).default(false),
  nuevo: integer("nuevo", {mode: 'boolean'}).default(false),
  precio: text("precio").notNull(),
});

export const sillas = sqliteTable("sillas",{
  id: integer("id").primaryKey({autoIncrement: true}),
  modelo: text("modelo", { length: 256 }).notNull(),
  imagen: text("imagen").notNull(),
  formato: text("formato", { length: 256 }).notNull(),
  materialAsiento: text("tipoMaterialAsiento").notNull(),
  colorBastidor: text("colorBastidor", { length: 256 }).notNull(),
  tendencia: integer("tendencia", {mode: 'boolean'}).default(false),
  nuevo: integer("nuevo", {mode: 'boolean'}).default(false),
  precio: text("precio").notNull(), 
});

export const bancos = sqliteTable("bancos",{
  id: integer("id").primaryKey({autoIncrement: true}),
  modelo: text("modelo", { length: 256 }).notNull(),
  imagen: text("imagen").notNull(),
  modulo: text ("modulo").notNull(),
  materialBastidor: text("materialBastidor", { enum: ["laminado", "laca", "barniz", "nada"]}).notNull(),
  respaldo: integer("respaldo", {mode: 'boolean'}).default(false),
  precioRespaldo: integer("precioRespaldo").default(0),
  zocalo: integer("zocalo", {mode: 'boolean'}).default(false),
  precio: text("precio").notNull(), 
});

export const colores = sqliteTable("colores", {
  id: integer("id").primaryKey({autoIncrement: true}),
  modelo: text("tipoModelo", { enum: [
    "laca",
    "barniz",
    "tapizado nvA",
    "tapizado nvC",
    "laminado",
    "cristal 3mm",
    "cristal 8mm",
    "cristal 8mm extraclaro",
    "silestone g1",
    "dekton g1",
    "laminado ECO",
  ]}).notNull(),
  nombreColor: text("nombreColor", { length: 256 }).notNull(),
  imagenColor: text("imagenColor", { length: 256 }).notNull(),
  grupo: text("tipoGrupo", { enum: ["g1", "g2", "g3", "g4", "g5", "g6"]}),
  acabadoMate: integer("acabadoMate", {mode: 'boolean'}).default(false),
  acabadoEfectoNatural: integer("acabadoEfectoNatural", {mode: 'boolean'}).default(false),
  acabadoBrillo: integer("acabadoBrillo", {mode: 'boolean'}).default(false),
  cantoColorBrillo: integer("cantoColorBrillo", {mode: 'boolean'}).default(false),
  cantoColorMate: integer("cantoColorMate", {mode: 'boolean'}).default(false),
  cantoColorAcabadoNatural: integer("cantoColorAcabadoNatural", {mode: 'boolean'}).default(false),
});

export const packs = sqliteTable("packs", {
  id: integer("id").primaryKey({autoIncrement: true}),
  modelo: text("modelo").notNull(),
  imagenMesa: text("imagenMesa").notNull(),
  descripcion: text("descripcion").notNull(),
  materialTapa: text("materialTapa", { enum: [
    "laminado ECO",
    "laminado",
    "cristal 3mm",
  ]}).notNull(),
  dimensiones: text("dimensiones").notNull(),
  precioCajon: integer("precioCajon").default(0).notNull(),
  precio: text("precio").notNull(),
});