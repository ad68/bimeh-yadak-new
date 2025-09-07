import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
export const usePriceDropStore = create(
  /*  persist( */
  devtools((set) => ({
    resultData: {},
    updateResultData: (data) => set({ resultData: data }),
    coloredParts: [],
    updateColoredParts: (data) => set({ coloredParts: data }),
    damagedParts: [],
    updateDamagedParts: (data) => set({ damagedParts: data }),
    replacedParts: [],
    updateReplacedParts: (data) => set({ replacedParts: data }),
  }))
  /*  {
      name: ".....price-drop-storage",
    }
  ) */
);
