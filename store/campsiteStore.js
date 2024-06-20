import { create } from "zustand";

const useCampsiteStore = create((set) => ({
  keyword: null,
  setKeyword: (keyword) => set({ keyword }),
  isSideBarOpened: false,
  openSideBar: () => set({ isSideBarOpened: true }),
  closeSideBar: () => set({ isSideBarOpened: false }),
  selectedSite: null,
  setSelectedSite: (site) => set({ selectedSite: site }),
}));

export default useCampsiteStore;
