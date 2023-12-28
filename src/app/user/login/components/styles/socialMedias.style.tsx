import Link from "next/link";
import styled from "styled-components";
import { ISocialMediasProps } from "@/types/ISocialMediasProps";

export const SocialLink = ({ className, children }: ISocialMediasProps) => {
  return (
    <Link href="#" className={className}>
      {children}
    </Link>
  );
};

export const StyledSocialLink = styled(SocialLink)``;
