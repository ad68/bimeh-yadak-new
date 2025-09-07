import { create } from "zustand";
import { devtools } from "zustand/middleware";
export const usePlatesStore = create(
  devtools((set) => ({
    deleteModal: false,
    deleteId: "",
    reloadPlateState: false,
    rowData: null,
    updateRowData: (rowData) => set({ rowData: rowData }),
    clearRowData: () => set({ rowData: null }),
    showDelateModal: () => set({ deleteModal: true }),
    hideDeleteModal: () => set({ deleteModal: false }),
    sideBarShow: false,
    showSideBar: () => set({ sideBarShow: true }),
    hideSideBar: () => set({ sideBarShow: false }),
    reloadPlateList: () =>
      set((state) => ({ reloadPlateState: !state.reloadPlateState })),
    updateDeleteId: (newDeleteId) => set({ deleteId: newDeleteId }),
  })),
);
