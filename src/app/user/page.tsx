"use client";
import { BoardLogin } from "./login/ui/BoardLogin.ui";
import { Dashboard } from "./login/ui/Dashboar.ui";
import { UserInfosContainer } from "./login/ui/UserInfos.container";
import SignIn from "./login/signIn";
import SignUp from "./login/signUp";

export default function LoginPage() {
  return (
    <>
      <Dashboard>
        <UserInfosContainer>
          <SignIn />
        </UserInfosContainer>
        <UserInfosContainer>
          <SignUp />
        </UserInfosContainer>
      </Dashboard>
    </>
  );
}
