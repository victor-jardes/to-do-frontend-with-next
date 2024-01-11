"use client";
import { Dashboard } from "./login/ui/Dashboar.ui";
import { UserInfosContainer } from "./login/ui/UserInfos.container";
import SignIn from "./login/signIn";
import SignUp from "./login/signUp";
import useHandleChangeRegister from "./login/states/useHandleChangeRegister.state";
import RegisterButtons from "./login/components/RegisterButtons.component";

export default function LoginPage() {
  const selectRegisterFormart = useHandleChangeRegister(
    (state) => state.selectLogin
  );

  return (
    <Dashboard>
      <UserInfosContainer>
        <RegisterButtons />
        {selectRegisterFormart ? <SignIn /> : <SignUp />}
      </UserInfosContainer>
    </Dashboard>
  );
}
