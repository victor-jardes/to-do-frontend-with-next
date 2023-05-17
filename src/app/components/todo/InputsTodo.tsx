"use client";

import { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import { TodoContextType } from "@/@types/todo";
import { InputValueAttibute } from "@/@types/IInputValueAttribute";

export default function InputsTodo() {
  const { saveTodo } = useContext(TodoContext) as TodoContextType;

  const [taskValue, setTaskValue] = useState("");

  const handleTask = ({ target }: InputValueAttibute) => {
    setTaskValue(target.value);
  };

  const handleAddTask = (description: string) => {
    saveTodo({ description });
    setTaskValue("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Write your task here"
        onChange={(e) => handleTask(e)}
        value={taskValue}
        data-testid="data-test-write-todo"
      />
      <input
        type="button"
        value="ADD"
        onClick={() => handleAddTask(taskValue)}
        disabled={taskValue.length >= 2 ? false : true}
        data-testid="data-test-button-add-todo"
      />
    </>
  );
}
