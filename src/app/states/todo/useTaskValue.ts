import { create } from "zustand";

type State = {
  taskValue: string;
};

type Action = {
  setTaskValue: (taskValue: string) => void;
  reset: () => void;
};

const initialState: State = {
  taskValue: "",
};

const useTaskValue = create<State & Action>()((set) => ({
  taskValue: "",
  setTaskValue: (taskValue) => set(() => ({ taskValue: taskValue })),
  reset() {
    set(initialState);
  },
}));

export default useTaskValue;
