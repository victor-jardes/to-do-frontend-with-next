import { create } from "zustand";

type State = {
  selectLogin: boolean;
  signInDisabled: boolean;
  signUpDisabled: boolean;
};

type Action = {
  setIsLogin: (selectLogin: boolean) => void;
  setsignInDisabled: (signInDisabled: boolean) => void;
  setsignUpDisabled: (signUpDisabled: boolean) => void;
};

const useHandleChangeRegister = create<State & Action>()((set) => ({
  selectLogin: true,
  setIsLogin: (selectLogin) => set(() => ({ selectLogin })),
  signInDisabled: true,
  setsignInDisabled: (signInDisabled) => set(() => ({ signInDisabled })),
  signUpDisabled: false,
  setsignUpDisabled: (signUpDisabled) => set(() => ({ signUpDisabled })),
}));

export default useHandleChangeRegister;
