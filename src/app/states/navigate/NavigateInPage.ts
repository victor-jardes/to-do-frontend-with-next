import { create } from "zustand";

type State = {
  currentPage: number;
};

type Action = {
  setCurrentPage: (currentPage: number) => void;
};

const StateNavigateInPage = create<State & Action>()((set) => ({
  currentPage: 1,
  setCurrentPage: (currentPage) => set(() => ({ currentPage: currentPage })),
}));

export default StateNavigateInPage;
