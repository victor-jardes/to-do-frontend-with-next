import styled from "styled-components";
import Image from "next/image";

export const StyledSocialMediasCard = styled.div`
  background-color: red;
  display: grid;
  grid-template-rows: 30px 1fr;
  height: 100px;
  width: 100%;
`;

export const StyledSocialIconsContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`;

export const StyledImgIcons = styled(Image)``;
