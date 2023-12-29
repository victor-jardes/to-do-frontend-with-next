import { ActionsButton } from "../components/ActionsButton.component";
import { CardFooter } from "../components/CardFooter.component";
import { CardHeader } from "../components/CardHeader.component";
import { CardMain } from "../components/CardMain.component";
import { InputDate } from "../components/InputDate.component";
import { SmallLetters } from "../components/SmallLetters.component";
import SocialMedias from "../components/SocialMedias.components";
import {
  StyledSocialIconsContainer,
  StyledSocialMediasCard,
} from "../components/styles/cardSocialMedias.style";

const SOCIAL_MIDIAS_LOGIN = "or use your email account";
const RECOVERY_PASSWORD = "Forgot your password?";

export default function SignIn() {
  return (
    <>
      <CardHeader text="Login" />

      <StyledSocialMediasCard>
        <SmallLetters text={SOCIAL_MIDIAS_LOGIN} alignBaseline={true} />
        <StyledSocialIconsContainer>
          <SocialMedias picture="/images/facebook.png" alt="facebook icon" />
          <SocialMedias picture="/images/googlesearch.png" alt="google icon" />
        </StyledSocialIconsContainer>
      </StyledSocialMediasCard>

      <CardMain gap="0.2rem">
        <InputDate type={"text"} placeHolder={"Email"} />
        <InputDate type={"password"} placeHolder={"password"} />
      </CardMain>

      <CardFooter gap={"2rem"}>
        <SmallLetters text={RECOVERY_PASSWORD} />
        <ActionsButton text={"sign in"} />
      </CardFooter>
    </>
  );
}
