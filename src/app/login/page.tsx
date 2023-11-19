"use client";
import { ActionsButton } from "./components/ActionsButton.component";
import { InputDate } from "./components/InputDate.component";
import { SmallLetters } from "./components/SmallLetters.component";
import { TitleText } from "./components/TitleText.component";
import { Dashboard } from "./ui/Dashboar.ui";
import { UserInfosContainer } from "./ui/UserInfos.container";

const SOCIAL_MIDIAS_LOGIN = "or use your email account";
const RECOVERY_PASSWORD = "Forgot your password?";

export default function LoginPage() {
  return (
    <>
      <Dashboard>
        <UserInfosContainer>
          <TitleText text={"Login"} />
          <SmallLetters text={SOCIAL_MIDIAS_LOGIN} />
          <InputDate type={"text"} placeHolder={"Email"} />
          <InputDate type={"password"} placeHolder={"password"} />
          <SmallLetters text={RECOVERY_PASSWORD} />
          <ActionsButton text={"sign in"} />
        </UserInfosContainer>
      </Dashboard>
    </>
  );
}
