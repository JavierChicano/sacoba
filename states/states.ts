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

//Estado para guardar el estado de la sesion
type SesionState = {
  sesionON: boolean;
  setSesionON: (sesion: boolean) => void;
};

export const useSesion = create<SesionState>((set) => ({
  sesionON: false,
  setSesionON: (sesion) => set({ sesionON: sesion }),
}));
