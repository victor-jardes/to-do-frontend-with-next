import styled from "styled-components";

export const BlockWithListOfAllTodos = styled.div`
  border-color: black;
  border-style: solid;
  height: 95%;
  margin: auto;
  width: 98%;
  border-radius: 0.4rem;
`;

export const ListWraper = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr auto;
`;

export const TextContainer = styled.div`
  flex-grow: 1;
`;

export const StyledListItemWithTask = styled.li`
  font-size: 1.6rem;
  white-space: normal;
`;
