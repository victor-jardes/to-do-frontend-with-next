import { create } from "zustand";

type State = {
  selectLogin: boolean;
};

type Action = {
  setIsLogin: (selectLogin: boolean) => void;
};

const useHandleChangeRegister = create<State & Action>()((set) => ({
  selectLogin: true,
  setIsLogin: (selectLogin) => set(() => ({ selectLogin })),
}));

export default useHandleChangeRegister;
