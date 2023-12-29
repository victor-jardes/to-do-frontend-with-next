import { ISocialMediasComponentProps } from "@/types/ISocialMediasComponentProps";
import {
  StyledImgIcons,
  StyledSocialLink,
} from "./styles/cardSocialMedias.style";

export default function SocialMedias({
  picture,
  alt,
}: ISocialMediasComponentProps) {
  return (
    <>
      <StyledSocialLink href="#">
        <StyledImgIcons src={picture} alt={alt} width={28} height={28} />
      </StyledSocialLink>
    </>
  );
}
