import { create } from 'zustand';

interface SelectedVehicleState {
    selectedVehicle: Vehicle[] | null;
    setSelectedVehicle: (city: Vehicle[]) => void;

}

export const useSelectedVehicleStore = create<SelectedVehicleState>((set) => ({
    // Define state variables and setters
    selectedVehicle: null,
    setSelectedVehicle: (newValue) => set({ selectedVehicle: newValue }),
}));
