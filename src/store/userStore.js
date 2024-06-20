import { create } from "zustand";

const useUserStore = create((set) => ({
  isSignIn: false,
  userName: "",
  userImage: "",
  setSignIn: () => set({ isSignIn: true }),
  setSignOut: () => set({ isSignIn: false }),
  setUserName: (userName) => set({ userName }),
  setUserImage: (userImage) => set({ userImage }),
}));

export default useUserStore;
