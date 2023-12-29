import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledSocialMediasCard = styled.div`
  display: grid;
  grid-template-rows: 35px 1fr;
  height: 100px;
  width: 100%;
`;

export const StyledSocialIconsContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3px;
  justify-content: center;
`;

export const StyledSocialLink = styled(Link)`
  align-self: start;
  border: 2px solid rgba(241, 240, 240, 0.975);
  border-radius: 50%;
  padding: 3px;
  margin: 3px;
`;

export const StyledImgIcons = styled(Image)``;
