import Image from "next/image";
import { StyledSocialLink } from "./styles/socialMedias.style";
import { ISocialMediasComponentProps } from "@/types/ISocialMediasComponentProps";

export default function SocialMedias({
  picture,
  alt,
}: ISocialMediasComponentProps) {
  return (
    <>
      <StyledSocialLink>
        <Image src={picture} alt={alt} width={35} height={35} />
      </StyledSocialLink>
    </>
  );
}
