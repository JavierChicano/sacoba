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
    colorExtensible?: string;
    altura: string;
    precio: number;
    cantidad: number;
  };
  setMesaFinal: (
    modelo: string,
    dimension: string,
    acabado: string,
    grupo: string | undefined,
    color: string,
    grosor: string | undefined,
    colorPata: string,
    colorExtensible: string | undefined,
    altura: string
  ) => void;
  setPrecioMesaFinal: (precio: number) => void;
  setCantidadMesas: (cantidad: number) => void;
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
    colorExtensible: undefined,
    altura: "",
    precio: 0,
    cantidad: 1,
  },
  setMesaFinal: (
    modelo: string,
    dimension: string,
    acabado: string,
    grupo: string | undefined,
    color: string,
    grosor: string | undefined,
    colorPata: string,
    colorExtensible: string | undefined,
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
        colorExtensible,
        altura,
        precio: state.mesa.precio,
        cantidad: state.mesa.cantidad,
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
  setCantidadMesas(cantidad) {
    set((state) => ({
      mesa: {
        ...state.mesa,
        cantidad: cantidad,
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
    cantidad: number;
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
  setCantidadSillas: (cantidad: number) => void;
};

export const useSillaFinal = create<SillaStateFinal>((set) => ({
  silla: {
    modelo: "",
    formato: "",
    acabado: "",
    color: "",
    colorPata: "",
    precio: 0,
    cantidad: 1, // Agregado por mí
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
        cantidad: state.silla.cantidad,
      },
    })),
  setPrecioSillaFinal: (precio) =>
    set((state) => ({
      silla: {
        ...state.silla,
        precio,
      },
    })),
  setCantidadSillas: (cantidad) =>
    set((state) => ({
      silla: {
        ...state.silla,
        cantidad,
      },
    })),
}));

//Estado global para guardar los datos finales del banco
type BancoStateFinal = {
  banco: {
    modelo: string;
    modulos: {
      dimensiones: string;
      respaldo: boolean;
      precioRespaldo?: number;
      cantidad: number;
      precioModulo: number;
    }[];
    acabadoTapizado: string;
    colorTapizado: string;
    acabadoBastidor: string;
    colorBastidor: string;
    zocalo?: boolean;
    precio: number;
    cantidad: number;
  };
  setBancoFinal: (
    modelo: string,
    acabadoTapizado: string,
    colorTapizado: string,
    acabadoBastidor: string,
    colorBastidor: string,
    zocalo?: boolean
  ) => void;
  setPrecioBancoFinal: (precio: number) => void;
  setCantidadBancos: (cantidad: number) => void;
  agregarModulo: (
    dimensiones: string,
    respaldo: boolean,
    cantidad: number,
    precioModulo: number,
    precioRespaldo?: number
  ) => void;
  eliminarModulo: (dimensiones: string) => void;
  vaciarModulos: () => void;
};
export const useBancoFinal = create<BancoStateFinal>((set) => ({
  banco: {
    modelo: "",
    modulos: [],
    acabadoTapizado: "",
    colorTapizado: "",
    acabadoBastidor: "",
    colorBastidor: "",
    zocalo: false,
    precio: 0,
    cantidad: 1,
  },
  setBancoFinal: (
    modelo,
    acabadoTapizado,
    colorTapizado,
    acabadoBastidor,
    colorBastidor,
    zocalo = false
  ) =>
    set((state) => ({
      banco: {
        ...state.banco,
        modelo,
        acabadoTapizado,
        colorTapizado,
        acabadoBastidor,
        colorBastidor,
        zocalo,
      },
    })),
  setPrecioBancoFinal: (precio) =>
    set((state) => ({
      banco: {
        ...state.banco,
        precio,
      },
    })),
  setCantidadBancos: (cantidad) =>
    set((state) => ({
      banco: {
        ...state.banco,
        cantidad,
      },
    })),
  agregarModulo: (
    dimensiones,
    respaldo,
    cantidad,
    precioModulo,
    precioRespaldo
  ) =>
    set((state) => {
      // Buscamos si ya existe un módulo con estas dimensiones
      const existingIndex = state.banco.modulos.findIndex(
        (modulo) => modulo.dimensiones === dimensiones
      );
      if (existingIndex !== -1) {
        // Si ya existe un módulo con estas dimensiones, lo sobrescribimos
        const updatedModulos = [...state.banco.modulos];
        updatedModulos[existingIndex] = {
          dimensiones,
          respaldo,
          cantidad,
          precioModulo,
          precioRespaldo,
        };

        return {
          banco: {
            ...state.banco,
            modulos: updatedModulos,
          },
        };
      } else {
        // Si no existe, agregamos un nuevo módulo
        return {
          banco: {
            ...state.banco,
            modulos: [
              ...state.banco.modulos,
              {
                dimensiones,
                respaldo,
                cantidad,
                precioModulo,
                precioRespaldo,
              },
            ],
          },
        };
      }
    }),
  eliminarModulo: (dimensiones) =>
    set((state) => ({
      banco: {
        ...state.banco,
        modulos: state.banco.modulos.filter(
          (modulo) => modulo.dimensiones !== dimensiones
        ),
      },
    })),
  vaciarModulos: () => {
    set((state) => ({
      banco: {
        ...state.banco,
        modulos: [],
      },
    }));
  },
}));
