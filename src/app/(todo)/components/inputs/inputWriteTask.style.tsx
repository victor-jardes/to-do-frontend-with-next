"use client";

import styled from "styled-components";

export const StyledInputTodoWriteTask = styled.input`
  border-style: none;
  font-size: 2rem;
  height: 15%;
  margin-bottom: 0.9rem;
  min-height: 12%;
  min-width: 100%;
  width: 100%;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.973);
    border-radius: 0.2rem;
    outline: 0.2rem solid #e6f7ef;
    outline-offset: 0.1rem;
  }
`;
