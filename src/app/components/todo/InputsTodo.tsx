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
  };

  return (
    <>
      <input
        type="text"
        placeholder="write your task here"
        onChange={(e) => handleTask(e)}
      />
      <input
        type="button"
        value="Add"
        onClick={() => handleAddTask(taskValue)}
      />
    </>
  );
}
