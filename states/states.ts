import { create } from "zustand";

type MesaParams = {
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
};

type MesaClickadaState = {
  mesaSeleccionada: MesaParams | null;
  setMesaSeleccionada: (mesa: MesaParams | null) => void;
};

export const useMesaClickada = create<MesaClickadaState>((set) => ({
  mesaSeleccionada: null,
  setMesaSeleccionada: (mesa: MesaParams | null) => set({ mesaSeleccionada: mesa }),
}));
