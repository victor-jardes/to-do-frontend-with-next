"use client";

import { InputValueAttibute } from "@/types/IInputValueAttribute";
import {
  StyledInputTodoWriteTask,
  StyledWraperWritInput,
} from "./inputWriteTask.style";
import useTaskValue from "@/app/states/todo/useTaskValue";

export default function InputWriteTask() {
  const taskValue = useTaskValue((state) => state.taskValue);
  const setTaskValue = useTaskValue((state) => state.setTaskValue);

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
        placeholder="Write your task here"
        data-testid="data-test-write-todo"
      />
    </StyledWraperWritInput>
  );
}
