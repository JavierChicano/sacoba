export interface TipoMesa {
  id: number;
  modelo: string;
  imagen: string;
  tipoBase: string;
  extension: string;
  materialTapa: string;
  grosorTapa:  boolean | null;
  dimensiones: string;
  altura: string;
  materialPata: string;
  colorPata: string;
  precio: string;
}
export interface TipoBanco {
  id: number;
  modelo: string;
  imagen: string;
  modulo: string;
  materialBastidor: string;
  respaldo: boolean | null;
  precioRespaldo: number | null;
  zocalo: boolean | null;
  precio: string;
}
export interface TipoPack {
  id: number;
  modelo: string;
  imagenMesa: string;
  descripcion: string;
  materialTapa: string;
  dimensiones: string;
  precioCajon: number;
  precio: string;
}
export interface TipoSilla {
  id: number;
  modelo: string;
  imagen: string;
  formato: string;
  materialAsiento: string;
  colorBastidor: string;
  tendencia: boolean | null;
  nuevo: boolean | null;
  precio: string;
}

export interface TipoColor {
  id: number;
  modelo: string;
  nombreColor: string;
  imagenColor: string;
  grupo: string | null;
  acabado: string | null;
}

export interface TipoUsuario {
  correoElectronico: string;
  nombre: string;
  apellidos: string;
  contraseña: string;
}

//Actualizar user (sin contraseña)
export interface TipoUsuarioExtended {
  correoElectronico: string;
  nombre: string;
  apellidos: string;
  telefono: string | null;
  domicilio: string | null;
  cp: string | null;
  provincia: string | null;
}
export interface TipoConsulta {
  correoElectronico: string;
  nombre: string;
  motivo: string;
  consulta: string;
}
export interface TipoCarrito {
  cliente: string;
  tipoProducto: string;
  modelo: string;
  detallesProducto: string;
  precioIndividual: number;
}

export interface TipoPedido {
  id: number;
  cliente: string;
  fecha: string;
  productos: string;
  importe: number;
  tipoEnvio: string;
  direccion: string | null;
  entregado: number | null;
  observaciones: string | null;
}