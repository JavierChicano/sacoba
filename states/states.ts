import { create } from "zustand";
import { TipoBanco, TipoMesa, TipoSilla } from "../tipos/tipos";

// Estado para guardar la visibilidad del modal
type ModalState = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

export const useModal = create<ModalState>((set) => ({
  modalVisible: false,
  setModalVisible: (visible) => set({ modalVisible: visible }),
}));
//Visibilidad modal color bastidor
type ModalStateBastidor = {
  modalVisibleBastidor: boolean;
  setModalVisibleBastidor: (visible: boolean) => void;
};

export const useModalBastidor = create<ModalStateBastidor>((set) => ({
  modalVisibleBastidor: false,
  setModalVisibleBastidor: (visible) => set({ modalVisibleBastidor: visible }),
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

//Estado para guardar el color seleccionado
type ColorSeleccionado = {
  colorElegido: string;
  modeloElegido: string;
  setColorSeleccionado: (color: string, modelo: string) => void;
};

export const useColorSeleccionado = create<ColorSeleccionado>((set) => ({
  colorElegido: '',
  modeloElegido: '',
  setColorSeleccionado: (colorElegido: string, modeloElegido: string) => set({ colorElegido, modeloElegido }),
}));

//Estado para guardar el color seleccionado del bastidor
type ColorSeleccionadoBastidor = {
  colorElegidoBastidor: string;
  modeloElegidoBastidor: string;
  setColorSeleccionadoBastidor: (color: string, modelo: string) => void;
};

export const useColorSeleccionadoBastidor = create<ColorSeleccionadoBastidor>((set) => ({
  colorElegidoBastidor: '',
  modeloElegidoBastidor: '',
  setColorSeleccionadoBastidor: (colorElegidoBastidor: string, modeloElegidoBastidor: string) => set({ colorElegidoBastidor, modeloElegidoBastidor }),
}));

//Estado para guardar el estado de la sesion
type SesionState = {
  sesionON: boolean;
  setSesionON: (sesion: boolean) => void;
};

export const useSesion = create<SesionState>((set) => ({
  sesionON: false,
  setSesionON: (sesion) => set({ sesionON: sesion }),
}));
