import { create } from "zustand";

type ThemeState = {
  cambioTema: 'light' | 'dark'; // Cambiamos el tipo de boolean a 'light' | 'dark'
  setCambioTema: (cambio: 'light' | 'dark') => void; // Cambiamos el tipo de boolean a 'light' | 'dark'
};

export const useCambioTema = create<ThemeState>((set) => ({
  cambioTema: 'light', // Tema por defecto es 'light'
  setCambioTema: (cambio: 'light' | 'dark') => set({ cambioTema: cambio }), // Aceptamos solo 'light' o 'dark'
}));
