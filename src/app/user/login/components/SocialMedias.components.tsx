import { StyledSocialLink } from "./styles/socialMedias.style";
import { ISocialMediasComponentProps } from "@/types/ISocialMediasComponentProps";
import { StyledImgIcons } from "./styles/cardSocialMedias.style";

export default function SocialMedias({
  picture,
  alt,
}: ISocialMediasComponentProps) {
  return (
    <>
      <StyledSocialLink>
        <StyledImgIcons src={picture} alt={alt} width={35} height={35} />
      </StyledSocialLink>
    </>
  );
}
