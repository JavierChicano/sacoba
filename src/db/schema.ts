import {
  bigint,
  boolean,
  int,
  mysqlEnum,
  mysqlTable,
  serial,
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
  modelo: varchar("modelo", { length: 256 }).notNull(),
  imagen: varchar("imagen", { length: 256 }),
  tipoBase: mysqlEnum("typeBase", [
    "4 patas",
    "peninsula",
    "pie central",
    "alas",
  ]).notNull(),
  extension: mysqlEnum("typeExtension", ["de libro", "fija", "extensible"]),
  tipoAmpliable: mysqlEnum("typeExtension", ["de libro", "fija", "extensible"]),
  auxiliar: mysqlEnum("typeAuxiliar", ["simple", "doble"]),
  materialTapa: mysqlEnum("typeMaterial", [
    "laminado",
    "cristal 3mm",
    "cristal 8mm",
    "cristal 8mm extraclaro",
    "silestone g1",
    "dekton g1",
  ]).notNull(),
  colorTapa: varchar("colorTapa", { length: 256 }).notNull(),
  dimensiones: varchar("dimensiones", { length: 256 }).notNull(),
  altura: varchar("altura", { length: 256 }).notNull(),
  materialPata: mysqlEnum("typematerialPata", ["madera", "aluminio"]).notNull(),
  colorPata: varchar("colorPata", { length: 256 }).notNull(),
  outlet: boolean("outlet"),
  tendencia: boolean("tendencia"),
  nuevo: boolean("nuevo"),
  precio: int("precio").notNull(), //El formato es en puntos correspondientes
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
  canto: boolean("canto"),
});
