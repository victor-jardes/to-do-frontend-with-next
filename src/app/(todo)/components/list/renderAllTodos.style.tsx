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
  display: flex;
  gap: 1.6rem;
  grid-template-columns: 1fr auto;
  margin: 0.7rem 0;
`;

export const TextContainer = styled.div`
  flex-grow: 1;
  background-color: rgba(245, 246, 250, 0.979);
  border-radius: 0.5rem;
  height: 3rem;
  max-height: 3rem;
`;

export const StyledListItemWithTask = styled.li`
  font-size: 1.6rem;
  list-style: none;
  text-align: justify;
  white-space: normal;
`;
