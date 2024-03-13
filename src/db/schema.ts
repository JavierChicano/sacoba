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
  imagen: text("imagen"),
  tipoBase: text("tipoBase", { enum: ["4 patas", "peninsula", "pie central", "alas"]}).notNull(),
  extension: text("extension", { enum: ["de libro", "fija", "extensible"]}),
  tipoAmpliable: text("tipoAmpliable", { enum: ["lateral", "frontal"]}),
  auxiliar: text("auxiliar", { enum: ["simple", "doble"]}),
  materialTapa: text("materialTapa", { enum: [
    "laminado",
    "cristal 3mm",
    "cristal 8mm",
    "cristal 8mm extraclaro",
    "silestone g1",
    "dekton g1",
  ]}).notNull(),
  colorTapa: text("colorTapa").notNull(),
  dimensiones: text("dimensiones").notNull(),
  altura: text("altura").notNull(),
  materialPata: text("materialPata", { enum: ["madera", "aluminio"]}).notNull(),
  colorPata: text("colorPata").notNull(), 
  outlet: integer("outlet", {mode: 'boolean'}).default(false),
  tendencia: integer("tendencia", {mode: 'boolean'}).default(false),
  nuevo: integer("nuevo", {mode: 'boolean'}).default(false),
  precio: integer("precio").notNull(),
});



export const sillas = sqliteTable("sillas",{
  id: integer("id").primaryKey({autoIncrement: true}),
  modelo: text("modelo", { length: 256 }).notNull(),
  formato: text("formato", { length: 256 }).notNull(),
  colorAsiento: text("tipoColorAsiento", { enum: ["tapizado nvA", "tapizado nvC", "laminado", "laca", "barniz"]}).notNull(),
  colorBastidor: text("modelo", { length: 256 }).notNull(),
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
  ]}).notNull(),
  nombreColor: text("nombreColor", { length: 256 }).notNull(),
  imagenColor: text("imagenColor", { length: 256 }).notNull(),
  grupo: text("tipoGrupo", { enum: ["g1", "g2", "g3", "g4", "g5", "g6"]}),
  grosor: text("grosor", { length: 256 }).notNull(),
  acabado: text("tipoAcabado", { enum: ["g1", "g2", "g3", "g4", "g5", "g6"]}),
  canto: integer("canto", {mode: 'boolean'}).default(false),
});
