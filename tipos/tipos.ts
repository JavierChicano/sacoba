export interface TipoMesa {
  id: number;
  modelo: string;
  imagen: string;
  tipoBase: string;
  extension: string | null;
  tipoAmpliable: string | null;
  auxiliar: string | null;
  materialTapa: string;
  dimensiones: string | null;
  altura: string | null;
  materialPata: string | null;
  colorPata: string | null;
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
  acabadoMate: boolean | null;
  acabadoEfectoNatural: boolean | null;
  acabadoBrillo: boolean | null;
  cantoColorBrillo: boolean | null;
  cantoColorMate: boolean | null;
  cantoColorAcabadoNatural: boolean | null;
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