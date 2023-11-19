import { StyledInputsDate } from "./styles/inputsDate.style";

interface IInputsTypes {
  type: string;
  placeHolder: string;
}

export function InputDate({ type, placeHolder }: IInputsTypes) {
  return (
    <>
      <StyledInputsDate type={type} placeholder={placeHolder} />
    </>
  );
}
