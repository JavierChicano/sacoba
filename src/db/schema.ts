import {
  integer,
  sqliteTable, text,
} from "drizzle-orm/sqlite-core";

//PUSHEAR EL SCHEMA --> bun drizzle-kit push
export const usuarios = sqliteTable("usuarios", {
  correoElectronico: text("correoElectronico").primaryKey(),
  nombre: text("nombre").notNull(),
  apellidos: text("apellidos").notNull(),
  contraseña: text("contraseña").notNull(),
  telefono: text("telefono"),
  domicilio: text("domicilio"),
  cp: text("cp"),
  provincia: text("provincia"),
});

export const mesas = sqliteTable("mesas", {
  id: integer("id").primaryKey({autoIncrement: true}),
  modelo: text("modelo").notNull(),
  imagen: text("imagen").notNull(),
  tipoBase: text("tipoBase", { enum: ["4 patas", "peninsula", "pie central", "alas"]}).notNull(),
  extension: text("extension", { enum: ["de libro", "fija", "extensible"]}).notNull(),
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
  grosorTapa: integer("grosorTapa", {mode: 'boolean'}).default(false),
  dimensiones: text("dimensiones").notNull(),
  altura: text("altura").notNull(),
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
  acabado: text("acabado"),
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


export const consultas = sqliteTable("consultas", {
  id: integer("id").primaryKey({autoIncrement: true}),
  correoElectronico: text("correoElectronico").notNull(),
  nombre: text("nombre").notNull(),
  motivo: text("motivo").notNull(),
  consulta: text("consulta").notNull(),
});

export const carrito = sqliteTable("carrito", {
  id: integer("id").primaryKey({autoIncrement: true}),
  cliente: text("cliente").notNull().references(() => usuarios.correoElectronico),
  tipoProducto: text("tipoProducto", { enum: ["mesa", "silla", "banco", "pack"]}).notNull(),
  modelo: text("modelo").notNull(),
  detallesProducto: text("detallesProducto").notNull(),
  precioTotal: integer("precioTotal").notNull(),
});

export const carritoLocal = sqliteTable("carritoLocal", {
  id: integer("id").primaryKey({autoIncrement: true}),
  tipoProducto: text("tipoProducto", { enum: ["mesa", "silla", "banco", "pack"]}).notNull(),
  modelo: text("modelo").notNull(),
  detallesProducto: text("detallesProducto").notNull(),
  precioTotal: integer("precioTotal").notNull(),
  fechaCreacion: text("fecha").notNull(),
});

export const pedidos = sqliteTable("pedidos", {
  id: integer("id").primaryKey({autoIncrement: true}),
  cliente: text("cliente").notNull().references(() => usuarios.correoElectronico),
  fecha: text("fecha").notNull(),
  productos: text("productos").notNull(),
  importe: integer("importe").notNull(),
  tipoEnvio: text("tipoEnvio").notNull(),
  direccion: text("tipoEnvio"),
  entregado: integer("entregado").default(0),
  observaciones: text("observaciones"),
});
