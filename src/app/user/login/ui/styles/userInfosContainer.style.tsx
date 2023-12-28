import styled from "styled-components";

export const StyledUserInfosContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4;
  grid-template-rows: 50px 100px 200px auto;
  height: 467px;
  margin: auto;
  width: 98%;
`;

export const StyledCentelizerChildrens = styled.div<{ $gap?: string }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || "20px"};
  justify-content: center;
`;
