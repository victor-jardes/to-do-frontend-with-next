import styled from "styled-components";

export const StyledSmallLetters = styled.p<{ $alignBaseline?: boolean }>`
  align-self: ${(props) => (props.$alignBaseline ? "end" : null)};
  color: #a19a9a;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  justify-self: center;
  line-height: normal;
  letter-spacing: 1.6px;
`;
