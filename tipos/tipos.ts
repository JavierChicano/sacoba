export interface TipoMesa {
  id: number;
  modelo: string;
  imagen: string;
  tipoBase: string;
  extension: string | null;
  tipoAmpliable?: string | null;
  auxiliar?: string | null;
  materialTapa?: string | null;
  colorTapa?: string | null;
  dimensiones?: string | null;
  altura?: string | null;
  materialPata?: string | null;
  colorPata?: string | null;
  precio: string;
}
export interface TipoBanco {
  id: number;
  modelo: string;
  imagen: string;
  modulo: string;
  materialBastidor: string;
  respaldo?: boolean | null;
  precioRespaldo?: number | null;
  zocalo?: boolean | null;
  precio: string;
}
