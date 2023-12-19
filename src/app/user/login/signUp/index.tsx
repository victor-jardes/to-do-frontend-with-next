import { ActionsButton } from "../components/ActionsButton.component";
import { CardFooter } from "../components/CardFooter.component";
import { CardHeader } from "../components/CardHeader.component";
import { CardMain } from "../components/CardMain.component";
import { InputDate } from "../components/InputDate.component";
import SocialMedias from "./components/SocialMedias.components";

const SOCIAL_MIDIAS_LOGIN = "Or use your email for register";

export default function SignUp() {
  return (
    <>
      <CardHeader text={"Create Account"} />

      <SocialMedias text={SOCIAL_MIDIAS_LOGIN} />

      <CardMain gap={"0.2rem"}>
        <InputDate type="text" placeHolder="Name" />
        <InputDate type="email" placeHolder="Email" />
        <InputDate type="password" placeHolder="Password" />
      </CardMain>

      <CardFooter gap="2rem">
        <ActionsButton text={"Sign up"} />
      </CardFooter>
    </>
  );
}
