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
