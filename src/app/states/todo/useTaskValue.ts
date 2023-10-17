import { create } from "zustand";

type State = {
  taskValue: string;
};

type Action = {
  setTaskValue: (taskValue: string) => void;
};

const useTaskValue = create<State & Action>()((set) => ({
  taskValue: "",
  setTaskValue: (taskValue) => set(() => ({ taskValue: taskValue })),
}));

export default useTaskValue;
