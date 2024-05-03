import { create } from "zustand";

// Estado global para guardar los datos finales de la mesa
type MesaStateFinal = {
  mesa: {
    dimension: string;
    acabado: string;
    grupo: string;
    color: string;
    grosor: string;
    colorPata: string;
    altura: string;
  };
  setMesaFinal: (
    dimension: string,
    acabado: string,
    grupo: string,
    color: string,
    grosor: string,
    colorPata: string,
    altura: string
  ) => void;
};

export const useMesaFinal = create<MesaStateFinal>((set) => ({
  mesa: {
    dimension: "",
    acabado: "",
    grupo: "",
    color: "",
    grosor: "",
    colorPata: "",
    altura: "",
  },
  setMesaFinal: (
    dimension: string,
    acabado: string,
    grupo: string,
    color: string,
    grosor: string,
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
    dimension: string;
    grupo: string;
    grosor: string;
    altura: string;
  };
  setMesaFinal: (
    dimension: string,
    grupo: string,
    grosor: string,
    altura: string
  ) => void;
};

export const useIndexMesaFinal = create<StateIndexMesaFinal>((set) => ({
    index: {
    dimension: "",
    grupo: "",
    grosor: "",
    altura: "",
  },
  setMesaFinal: (
    dimension: string,
    grupo: string,
    grosor: string,
    altura: string
  ) =>
    set((state) => ({
        index: {
        dimension,
        grupo,
        grosor,
        altura,
      },
    })),
}));
