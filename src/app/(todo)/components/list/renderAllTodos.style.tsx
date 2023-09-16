import styled, { css } from "styled-components";

export const BlockWithListOfAllTodos = styled.div`
  border-color: black;
  border-radius: 0.4rem;
  border-style: solid;
  height: 95%;
  margin: auto;
  width: 98%;
`;

export const ListWraper = styled.div`
  display: flex;
  gap: 1.6rem;
  margin: 0.7rem 0;
`;

export const TextContainer = styled.div`
  align-self: center;
  background-color: rgba(245, 246, 250, 0.979);
  border-radius: 0.5rem;
  flex-grow: 1;
  height: max-content;
  min-height: max-content;
`;

const notFinishedTaskStyle = css`
  font-size: 1.6rem;
  list-style: none;
  text-align: justify;
  white-space: normal;
`;

const finishedTaskStyle = css`
  ${notFinishedTaskStyle}
  color: grey;
  text-decoration: line-through;
`;

export const StyledListItemWithTask = styled.li<{ $isFinished: boolean }>`
  ${(props) => (props.$isFinished ? finishedTaskStyle : notFinishedTaskStyle)}
`;
