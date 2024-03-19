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
  bancoSeleccionado: TipoBanco | null;
  setBancoSeleccionado: (banco: TipoBanco | null) => void;
};

export const useBancoClickada = create<BancoClickadaState>((set) => ({
  bancoSeleccionado: null,
  setBancoSeleccionado: (banco: TipoBanco | null) => set({ bancoSeleccionado: banco }),
}));



//Estado para acumular el precio

type PrecioParams = {
  precioAcumulado: number;
  setPrecioAcumulado: (by: number) => void;
};

export const usePrecioAcumulado = create<PrecioParams>()((set) => ({
  precioAcumulado: 0,
  setPrecioAcumulado: (aumento: number) => set(() =>({precioAcumulado: aumento})),
}));
