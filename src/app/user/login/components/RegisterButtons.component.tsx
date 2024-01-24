import useHandleChangeRegister from "../states/useHandleChangeRegister.state";
import {
  StyledButtonSelectFormarRegister,
  StyledButtonsRegisterConteiner,
} from "./styles/registerButtons.style";

type indexProps = {
  selectLogin: boolean;
  format: "signIn" | "signUp";
};

export default function RegisterButtons() {
  const setRegisterFormart = useHandleChangeRegister(
    (state) => state.setIsLogin
  );
  const isDisabledSignIn = useHandleChangeRegister(
    (state) => state.signInDisabled
  );
  const isDisabledSignUp = useHandleChangeRegister(
    (state) => state.signUpDisabled
  );

  const setsignInDisabled = useHandleChangeRegister(
    (state) => state.setsignInDisabled
  );
  const setsignUpDisabled = useHandleChangeRegister(
    (state) => state.setsignUpDisabled
  );

  const handleSelectFormat = ({ selectLogin, format }: indexProps) => {
    if (format === "signIn") {
      setRegisterFormart(true);
      setsignInDisabled(true);
      setsignUpDisabled(false);
    } else {
      setRegisterFormart(false);
      setsignUpDisabled(true);
      setsignInDisabled(false);
    }
  };

  return (
    <StyledButtonsRegisterConteiner>
      <StyledButtonSelectFormarRegister
        onClick={() =>
          handleSelectFormat({ selectLogin: true, format: "signIn" })
        }
        disabled={isDisabledSignIn}
      >
        Sign-In
      </StyledButtonSelectFormarRegister>
      <StyledButtonSelectFormarRegister
        onClick={() =>
          handleSelectFormat({ selectLogin: false, format: "signUp" })
        }
        disabled={isDisabledSignUp}
      >
        Sign-Up
      </StyledButtonSelectFormarRegister>
    </StyledButtonsRegisterConteiner>
  );
}
