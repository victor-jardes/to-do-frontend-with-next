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

const SOCIAL_MIDIAS_LOGIN = "Or use your email for register";

export default function SignUp() {
  return (
    <>
      <CardHeader text={"Create Account"} />

      <StyledSocialMediasCard>
        <SmallLetters text={SOCIAL_MIDIAS_LOGIN} alignBaseline={true} />
        <StyledSocialIconsContainer>
          <SocialMedias picture="/images/facebook.png" alt="facebook icon" />
          <SocialMedias picture="/images/googlesearch.png" alt="google icon" />
        </StyledSocialIconsContainer>
      </StyledSocialMediasCard>

      <CardMain gap={"0.2rem"}>
        <InputDate type="email" placeHolder="Email" />
        <InputDate type="password" placeHolder="Password" />
        <InputDate type="text" placeHolder="Name" />
      </CardMain>

      <CardFooter>
        <ActionsButton text={"Sign up"} />
      </CardFooter>
    </>
  );
}
