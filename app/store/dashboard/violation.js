import { create } from "zustand";
import { devtools } from "zustand/middleware";
export const useViolationStore = create(
  devtools((set) => ({
    plateInfo: {},
    updatePlateInfo: (value) => set({ plateInfo: value }),
    violationType: "",
    updateViolationType: (value) => set({ violationType: value }),
  }))
);
