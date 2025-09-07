import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
export const useAuthStore = create(
  persist(
    devtools((set) => ({
      authInfo: {},
      updateAuthInfo: (value) => set({ authInfo: value }),
      clearAuthInfo: () => set({ authInfo: {} }),
      mobileNumber: "",
      updateMobileNumber: (value) => set({ mobileNumber: value }),
    })),
    {
      name: "auth-storage",
    }
  )
);
