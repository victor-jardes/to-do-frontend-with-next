"use client";

import { requestForCreateTask } from "@/app/api/todo/createTask";
import { TodoContext } from "@/app/context/todoContext";
import { TodoContextType } from "@/types/ITodo";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ButtonAddTask() {
  const { setTaskValue, taskValue, setAllTodo, todos } = useContext(
    TodoContext
  ) as TodoContextType;

  const handleAddTask = async () => {
    try {
      const createAndGetNewTask = await requestForCreateTask({
        id: uuidv4(),
        description: taskValue,
      });

      if (createAndGetNewTask) {
        setAllTodo([...todos, createAndGetNewTask]);
        setTaskValue("");
      }
    } catch {
      console.log("error in save task");
    }
  };

  return (
    <>
      <label htmlFor="button-add-todo">ADD your todo</label>
      <button
        id="button-add-todo"
        type="button"
        value="ADD"
        onClick={() => handleAddTask()}
        disabled={taskValue.length >= 2 ? false : true}
        data-testid="data-test-button-add-todo"
      >
        ADD
      </button>
    </>
  );
}
