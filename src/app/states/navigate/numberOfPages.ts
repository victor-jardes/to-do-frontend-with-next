import { create } from "zustand";

type States = {
  numberOfPage: number[];
};

type Actions = {
  setNumberOfPages: (numberOfPage: number) => void;
};

const StateNumberOfPagesStore = create<States & Actions>()((set) => ({
  numberOfPage: [1],
  setNumberOfPages: (numberOfPage) =>
    set((state) => ({ numberOfPage: [...state.numberOfPage, numberOfPage] })),
}));

export default StateNumberOfPagesStore;
