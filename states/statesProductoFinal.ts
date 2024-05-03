import { create } from "zustand";

// Estado global para guardar los datos finales de la mesa
type MesaStateFinal = {
  mesa: {
    dimension: string;
    acabado: string;
    grupo?: string;
    color: string;
    grosor?: string;
    colorPata: string;
    altura: string;
  };
  setMesaFinal: (
    dimension: string,
    acabado: string,
    grupo: string | undefined,
    color: string,
    grosor: string | undefined,
    colorPata: string,
    altura: string
  ) => void;
};

export const useMesaFinal = create<MesaStateFinal>((set) => ({
  mesa: {
    dimension: "",
    acabado: "",
    grupo: undefined,
    color: "",
    grosor: undefined,
    colorPata: "",
    altura: "",
  },
  setMesaFinal: (
    dimension: string,
    acabado: string,
    grupo: string | undefined,
    color: string,
    grosor: string | undefined,
    colorPata: string,
    altura: string
  ) =>
    set((state) => ({
      mesa: {
        dimension,
        acabado,
        grupo,
        color,
        grosor,
        colorPata,
        altura,
      },
    })),
}));

//Estado para guardar los index
type StateIndexMesaFinal = {
  index: {
    dimension: number;
    acabado: string;
    grupo?: string;
    grosor?: string;
    altura: number;
  };
  setIndexMesaFinal: (
    dimension: number,
    acabado: string,
    grupo: string | undefined,
    grosor: string | undefined,
    altura: number
  ) => void;
};

export const useIndexMesaFinal = create<StateIndexMesaFinal>((set) => ({
  index: {
    dimension: 0,
    acabado: "",
    grupo: undefined,
    grosor: undefined,
    altura: 0,
  },
  setIndexMesaFinal: (
    dimension: number,
    acabado: string,
    grupo: string | undefined,
    grosor: string | undefined,
    altura: number
  ) =>
    set((state) => ({
      index: {
        dimension,
        acabado,
        grupo,
        grosor,
        altura,
      },
    })),
}));
