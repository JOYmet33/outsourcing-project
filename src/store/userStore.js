import { create } from "zustand";

const useUserStore = create((set) => ({
  isSignIn: false,
  setSignIn: () => set({ isSignIn: true }),
  setSignOut: () => set({ isSignIn: false }),
}));

export default useUserStore;
