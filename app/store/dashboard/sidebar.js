import { create } from "zustand";
import { devtools } from "zustand/middleware";
export const useSideBarStore = create(
  devtools((set) => ({
    sideBarShow: false,
    showSideBar: () => set({ sideBarShow: true }),
    hideSideBar: () => set({ sideBarShow: false }),
  }))
);
