import { create } from "zustand";

// Estado global para guardar los datos finales de la mesa
type MesaStateFinal = {
  mesa: {
    modelo: string;
    dimension: string;
    acabado: string;
    grupo?: string;
    color: string;
    grosor?: string;
    colorPata: string;
    altura: string;
    precio: number;
  };
  setMesaFinal: (
    modelo: string,
    dimension: string,
    acabado: string,
    grupo: string | undefined,
    color: string,
    grosor: string | undefined,
    colorPata: string,
    altura: string
  ) => void;
  setPrecioMesaFinal: (precio: number) => void;
};

export const useMesaFinal = create<MesaStateFinal>((set) => ({
  mesa: {
    modelo: "",
    dimension: "",
    acabado: "",
    grupo: undefined,
    color: "",
    grosor: undefined,
    colorPata: "",
    altura: "",
    precio: 0,
  },
  setMesaFinal: (
    modelo: string,
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
        modelo,
        dimension,
        acabado,
        grupo,
        color,
        grosor,
        colorPata,
        altura,
        precio: state.mesa.precio,
      },
    })),
  setPrecioMesaFinal(precio) {
    set((state) => ({
      mesa: {
        ...state.mesa,
        precio: precio,
      },
    }));
  },
}));

//Estado para guardar los index de la mesa
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

// Estado global para guardar los datos finales de la silla
type SillaStateFinal = {
  silla: {
    modelo: string;
    formato: string;
    acabado: string;
    color: string;
    colorPata: string;
    precio: number;
  };
  setSillaFinal: (
    modelo: string,
    formato: string,
    acabado: string,
    color: string,
    colorPata: string,
    precio: number
  ) => void;
  setPrecioSillaFinal: (precio: number) => void;
};
export const useSillaFinal = create<SillaStateFinal>((set) => ({
  silla: {
    modelo: "",
    formato: "",
    acabado: "",
    color: "",
    colorPata: "",
    precio: 0,
  },
  setSillaFinal: (
    modelo: string,
    formato: string,
    acabado: string,
    color: string,
    colorPata: string,
    precio: number
  ) =>
    set((state) => ({
      silla: {
        modelo,
        formato,
        acabado,
        color,
        colorPata,
        precio,
      },
    })),
  setPrecioSillaFinal: (precio: number) =>
    set((state) => ({
      silla: {
        ...state.silla,
        precio,
      },
    })),
}));
