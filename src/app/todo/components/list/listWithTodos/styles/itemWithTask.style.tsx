import styled, { css } from "styled-components";

export const ListWraper = styled.div`
  display: flex;
  gap: 1.6rem;
  height: 15%;
  margin-left: 1rem;
  margin-top: 1rem;
`;

const notFinishedTaskStyle = css`
  font-size: 1.6rem;
  list-style: none;
  text-align: justify;
`;

const finishedTaskStyle = css`
  ${notFinishedTaskStyle}
  color: grey;
  text-decoration: line-through;
`;

export const StyledListItemWithTask = styled.li<{ $isFinished: boolean }>`
  white-space: normal;
  background-color: rgba(245, 246, 250, 0.979);
  border-radius: 0.5rem;
  height: 100%;
  width: 85%;
  ${(props) => (props.$isFinished ? finishedTaskStyle : notFinishedTaskStyle)}
`;
