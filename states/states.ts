import { create } from "zustand";
import { TipoBanco, TipoMesa } from "../tipos/tipos";

//Estado para guardar la mesa seleccionado
type MesaClickadaState = {
  mesaSeleccionada: TipoMesa | null;
  setMesaSeleccionada: (mesa: TipoMesa | null) => void;
};

export const useMesaClickada = create<MesaClickadaState>((set) => ({
  mesaSeleccionada: null,
  setMesaSeleccionada: (mesa: TipoMesa | null) => set({ mesaSeleccionada: mesa }),
}));

//Estado para guardar el banco seleccionado
type BancoClickadaState = {
  bancoSeleccionado: TipoBanco[] | null;
  setBancoSeleccionado: (banco: TipoBanco[] | null) => void;
};

export const useBancoClickado = create<BancoClickadaState>((set) => ({
  bancoSeleccionado: null,
  setBancoSeleccionado: (banco: TipoBanco[] | null) => set({ bancoSeleccionado: banco }),
}));


//Estado para acumular el precio
type PrecioParams = {
  precioAcumulado: number;
  setPrecioAcumulado: (precio: number) => void;
  addPrecioAcumulado: (aumento: number) => void;
  subPrecioAcumulado: (descuento: number) => void;
};

export const usePrecioAcumulado = create<PrecioParams>()((set) => ({
  precioAcumulado: 0,
  setPrecioAcumulado: (precio: number) => set(() => ({ precioAcumulado: precio })),
  addPrecioAcumulado: (aumento: number) => set((state) => ({ precioAcumulado: state.precioAcumulado + aumento })),
  subPrecioAcumulado: (descuento: number) => set((state) => ({ precioAcumulado: state.precioAcumulado - descuento })),
}));


//Estado para guardar los modulos seleccionados de banco
type PreciosBancoState = {
  precios: Map<number, number>; // Cambiar a un mapa de número a número
  modificarPrecio: (clave: number, nuevoPrecio: number) => void; // Cambiar 'indice' a 'clave'
  resetearPrecios: () => void;
};

export const usePreciosBanco = create<PreciosBancoState>((set) => ({
  precios: new Map(), // Inicializar el mapa vacío
  modificarPrecio: (clave: number, nuevoPrecio: number) =>
    set((state) => ({
      precios: new Map(state.precios).set(clave, nuevoPrecio), // Crear un nuevo mapa con la clave y el nuevo precio
    })),
  resetearPrecios: () => set({ precios: new Map() }), // Resetear el mapa a uno vacío
}));
