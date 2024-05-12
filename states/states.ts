import { create } from "zustand";

// Estado para guardar la visibilidad del modal
type ModalState = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

export const useModal = create<ModalState>((set) => ({
  modalVisible: false,
  setModalVisible: (visible) => set({ modalVisible: visible }),
}));

// Estado para guardar el precio acumulado
type PrecioState = {
  precioAcumulado: number;
  setPrecioAcumulado: (precio: number) => void;
};

export const usePrecioAcumulado = create<PrecioState>((set) => ({
  precioAcumulado: 0,
  setPrecioAcumulado: (precio) => set({ precioAcumulado: precio }),
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

//Estado para guardar el color seleccionado
type ColorSeleccionado = {
  colorElegido: string;
  modeloElegido: string;
  rutaImagen: string;
  grupo?: string; 
  setColorSeleccionado: (color: string, modelo: string, rutaImagen: string) => void; 
  setGrupo: (grupo: string) => void; 
};

export const useColorSeleccionado = create<ColorSeleccionado>((set) => ({
  colorElegido: '',
  modeloElegido: '',
  rutaImagen: '',
  grupo: 'no hay', 
  setColorSeleccionado: (colorElegido: string, modeloElegido: string, rutaImagen: string)=> set({ colorElegido, modeloElegido, rutaImagen }),
  setGrupo: (grupo: string) => set({ grupo }),
}));

//Estado para guardar el color seleccionado del bastidor
type ColorSeleccionadoBastidor = {
  colorElegidoBastidor: string;
  modeloElegidoBastidor: string;
  rutaImagenBastidor: string;

  setColorSeleccionadoBastidor: (color: string, modelo: string, rutaImagen: string) => void;
};

export const useColorSeleccionadoBastidor = create<ColorSeleccionadoBastidor>((set) => ({
  colorElegidoBastidor: '',
  modeloElegidoBastidor: '',
  rutaImagenBastidor: '',
  setColorSeleccionadoBastidor: (colorElegidoBastidor: string, modeloElegidoBastidor: string, rutaImagenBastidor: string) => set({ colorElegidoBastidor, modeloElegidoBastidor, rutaImagenBastidor }),
}));

//Guardar precio total carrito
type CarritoState = {
  totalProductos: number;
  setSumaTotal: (key: number, sumaTotal: number) => void;
};

export const usePrecioTotalCarrito = create<CarritoState>((set) => {
  const sumaTotalMap: Record<number, number> = {};

  const setSumaTotal = (key: number, sumaTotal: number) => {
    sumaTotalMap[key] = sumaTotal;
    const totalProductos = Object.values(sumaTotalMap).reduce((total, suma) => total + suma, 0);
    set({ totalProductos, setSumaTotal }); // Pasamos setSumaTotal como parte del estado
  };

  return {
    totalProductos: 0,
    setSumaTotal, // Aquí definimos setSumaTotal
  };
});