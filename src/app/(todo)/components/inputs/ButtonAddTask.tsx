"use client";

import { requestForCreateTask } from "@/app/api/todo/createTask";
import { v4 as uuidv4 } from "uuid";
import {
  StyledButtonTodoForAddTask,
  StyledButtonWraper,
} from "./buttonAddTask.style";
import useTaskValue from "@/app/states/todo/useTaskValue";
import useTodos from "@/app/states/todo/useTodo";

export default function ButtonAddTask() {
  const taskValue = useTaskValue((state) => state.taskValue);
  const setTaskValue = useTaskValue((state) => state.setTaskValue);

  const setTodo = useTodos((state) => state.addTodo);

  const handleAddTask = async () => {
    try {
      const createAndGetNewTask = await requestForCreateTask({
        id: uuidv4(),
        description: taskValue,
      });

      if (createAndGetNewTask) {
        setTodo(createAndGetNewTask);
        setTaskValue("");
      }
    } catch {
      console.log("error in save task");
    }
  };

  return (
    <StyledButtonWraper>
      <label htmlFor="button-add-todo" />
      <StyledButtonTodoForAddTask
        id="button-add-todo"
        type="button"
        value="ADD"
        onClick={() => handleAddTask()}
        disabled={taskValue.length >= 2 ? false : true}
        data-testid="data-test-button-add-todo"
      >
        ADD your task
      </StyledButtonTodoForAddTask>
    </StyledButtonWraper>
  );
}
