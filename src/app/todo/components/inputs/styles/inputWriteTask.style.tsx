"use client";

import styled from "styled-components";

export const StyledInputTodoWriteTask = styled.input`
  border-style: none;
  font-size: 2rem;
  height: 97%;
  margin-bottom: 0.5rem;
  min-height: 97%;
  min-width: 98%;
  width: 100%;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.973);
    box-sizing: border-box;
    border-radius: 0.2rem;
    outline: 0.2rem solid #78d2f3;
    outline-offset: 0.1rem;
  }
`;

export const StyledWraperWritInput = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 74%;
`;
