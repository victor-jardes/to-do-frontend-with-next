import styled from "styled-components";

export const StyledCardFooter = styled.section<{ $gap?: string }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || "20px"};
  justify-content: center;
`;
