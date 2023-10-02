"use client";

import { TodoContext } from "@/app/context/todoContext";
import { InputValueAttibute } from "@/types/IInputValueAttribute";
import { TodoContextType } from "@/types/ITodo";
import { useContext } from "react";
import {
  StyledInputTodoWriteTask,
  StyledWraperWritInput,
} from "./inputWriteTask.style";

export default function InputWriteTask() {
  const { setTaskValue, taskValue } = useContext(
    TodoContext
  ) as TodoContextType;

  const handleWriteTask = ({ target }: InputValueAttibute) => {
    setTaskValue(target.value);
  };

  return (
    <StyledWraperWritInput>
      <label htmlFor="input-for-write-task" />
      <StyledInputTodoWriteTask
        id="input-for-write-task"
        type="text"
        value={taskValue}
        onChange={(e) => handleWriteTask(e)}
        placeholder="Write you task here"
        data-testid="data-test-write-todo"
      />
    </StyledWraperWritInput>
  );
}
