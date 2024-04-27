import { create } from 'zustand';

interface SelectedCityState {
    selectedCity: City[] | null;
    setSelectedCity: (city: City[]) => void;

}

export const useSelectedCityStore = create<SelectedCityState>((set) => ({
    // Define state variables and setters
    selectedCity: null,
    setSelectedCity: (newValue) => set({ selectedCity: newValue }),
}));
