import {
  bigint,
  boolean,
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";

export const usuarios = mysqlTable("usuarios", {
  correoElectronico: varchar("correoElectronico", { length: 256 }).primaryKey(),
  nombre: varchar("nombre", { length: 256 }).notNull(),
  apellidos: varchar("apellidos", { length: 256 }).notNull(),
  contraseña: varchar("contraseña", { length: 256 }).notNull(),
});

export const mesas = mysqlTable("mesas", {
  id: serial("id").primaryKey(),
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
  outlet: boolean("outlet").default(false),
  tendencia: boolean("tendencia").default(false),
  nuevo: boolean("nuevo").default(false),
  precio: int("precio").notNull(),
});



export const sillas = mysqlTable("sillas",{
  id: serial("id").primaryKey(),
  modelo: varchar("modelo", { length: 256 }).notNull(),
  formato: varchar("formato", { length: 256 }).notNull(),
  colorAsiento: mysqlEnum("typeColorAsiento", ["tapizado nvA", "tapizado nvC", "laminado", "laca", "barniz"]).notNull(),
  colorBastidor: varchar("modelo", { length: 256 }).notNull(),
});


export const colores = mysqlTable("colores", {
  id: serial("id").primaryKey(),
  modelo: mysqlEnum("typeModelo", [
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
  ]).notNull(),
  nombreColor: varchar("nombreColor", { length: 256 }).notNull(),
  imagenColor: varchar("imagenColor", { length: 256 }).notNull(),
  grupo: mysqlEnum("typeGrupo", ["g1", "g2", "g3", "g4", "g5", "g6"]),
  grosor: varchar("grosor", { length: 256 }).notNull(),
  acabado: mysqlEnum("typeGrupo", ["g1", "g2", "g3", "g4", "g5", "g6"]),
  canto: boolean("canto").default(false),
});
