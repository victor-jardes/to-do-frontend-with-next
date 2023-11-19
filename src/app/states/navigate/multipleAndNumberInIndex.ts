import { create } from "zustand";

type State = {
  multipleAndNumberInIndex: number;
};

type Actions = {
  setMultipleAndNumberInIndex: (multipleAndNumberInIndex: number) => void;
};

const StateMultipleAndNumberInIndex = create<State & Actions>()((set) => ({
  multipleAndNumberInIndex: 1,
  setMultipleAndNumberInIndex: (numberInIndex) =>
    set((state) => ({
      multipleAndNumberInIndex: (state.multipleAndNumberInIndex +=
        numberInIndex),
    })),
}));

export default StateMultipleAndNumberInIndex;
