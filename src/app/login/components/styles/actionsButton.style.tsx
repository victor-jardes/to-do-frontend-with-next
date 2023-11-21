import styled from "styled-components";

export const StyledActionsButton = styled.button`
  background-color: ${(props) => props.theme.colors.darkYellow};
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  justify-content: center;
  height: 4.2rem;
  padding: 3px 10px;
  width: 13.5rem;

  // font
  color: #343434;
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.3rem;
`;
