import styled, { css } from "styled-components";

const buttonStyleDisabled = css`
  background-color: gray;
  border-radius: 0.3rem;
  cursor: not-allowed;
  font: white;
  opacity: 0.5;
  outline-offset: 0.2rem;
`;

const buttonStyleEnablade = css`
  background-color: white;
  border-radius: 0.3rem;
  border-style: none;
  box-shadow: 0 0 0.1rem 0.2rem #b6eeae;
  cursor: pointer;
  font: black;
  padding: 0.3rem;
  opacity: 0.9;

  &:hover,
  &:focus {
    background-color: #dfe4f0f6;
    outline: 0.2rem solid #78d2f3;
    outline-offset: 0.1rem;
  }
`;

export const StyledButtonTodoForAddTask = styled.button`
  align-items: center;
  font-size: 1.8rem;
  height: 100%;
  width: 100%;
  ${(props) => (props.disabled ? buttonStyleDisabled : buttonStyleEnablade)}
`;

export const StyledButtonWraper = styled.div`
  box-sizing: border-box;
  height: 97%;
  padding-left: 1rem;
  width: 25.5%;
`;
