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

type MaterialBastidor = {
  material: string;
  setMaterial: (material: string) => void;
};

export const useMaterialBastidor = create<MaterialBastidor>((set) => ({
  material: 'Laminado',
  setMaterial: (material: string) => set({ material }),
}));

//Estado para guardar los modulos seleccionados de banco
type ModuloBanco = {
  dimensiones: string;
  respaldo: boolean;
  cantidad: number;
  precio: number;
};

type PreciosBancoState = {
  precios: Map<number, ModuloBanco>;
  modificarPrecio: (clave: number, nuevoPrecio: number) => void;
  modificarCantidad: (clave: number, nuevaCantidad: number) => void;
  resetearPrecios: () => void;
  insertarModificarModulo: (clave: number, modulo: ModuloBanco) => void;
};

export const usePreciosBanco = create<PreciosBancoState>((set) => ({
  precios: new Map(),
  modificarPrecio: (clave: number, nuevoPrecio: number) =>
    set((state) => {
      const nuevosPrecios = new Map(state.precios);
      const modulo = nuevosPrecios.get(clave);
      if (modulo) {
        modulo.precio = nuevoPrecio;
        nuevosPrecios.set(clave, modulo);
        return { precios: nuevosPrecios };
      }
      return state;
    }),
  modificarCantidad: (clave: number, nuevaCantidad: number) =>
    set((state) => {
      const nuevosPrecios = new Map(state.precios);
      const modulo = nuevosPrecios.get(clave);
      if (modulo) {
        modulo.cantidad = nuevaCantidad;
        nuevosPrecios.set(clave, modulo);
        return { precios: nuevosPrecios };
      }
      return state;
    }),
  resetearPrecios: () => set({ precios: new Map() }),
  insertarModificarModulo: (clave: number, modulo: ModuloBanco) =>
    set((state) => {
      const nuevosPrecios = new Map(state.precios);
      nuevosPrecios.set(clave, modulo);
      return { precios: nuevosPrecios };
    }),
}));
