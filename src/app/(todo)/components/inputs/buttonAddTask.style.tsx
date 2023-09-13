import styled from "styled-components";

export const StyledButtonTodoForAddTask = styled.button`
  background-color: gray;
  cursor: not-allowed;
  font: white;
  opacity: 0.5;

  &:enabled {
    background-color: white;
    border-radius: 0.3rem;
    border-style: none;
    box-shadow: 0 0 0.1rem 0.2rem #b6eeae;
    cursor: pointer;
    font: black;
    padding: 0.3rem;
    opacity: 0.9;

    &:hover {
      background-color: #dfe4f0f6;
      box-shadow: 0 0 0.1rem 0.2rem #78d2f3;
    }
  }
`;
