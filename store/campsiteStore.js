import { create } from "zustand";

const useCampsiteStore = create((set) => ({
  keyword: null,
  setKeyword: (keyword) => set({ keyword }),
}));

export default useCampsiteStore;
