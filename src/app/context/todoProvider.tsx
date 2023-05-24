"use client";

import { ITodo, TodoContextType } from "@/@types/ITodo";
import { TodoContext } from "./todoContext";
import { useState } from "react";
import { IComponentChildren } from "@/@types/IComponentChildren";
import {
  dispatchSaveTodo,
  dispatchFinishedTodo,
} from "@/app/context/utils/dispatchTodo";

export default function TodoProvider({ children }: IComponentChildren) {
  const [todos, setAllTodo] = useState<ITodo[]>([]);
  const [taskValue, setTaskValue] = useState("");

  const saveTodo = () => {
    dispatchSaveTodo({
      description: taskValue,
      setAllTodo,
      todos,
    });
  };

  const finishedTodo = (id: string) => {
    dispatchFinishedTodo({ id, setAllTodo, todos });
  };

  const values: TodoContextType = {
    todos,
    taskValue,
    saveTodo,
    finishedTodo,
    setTaskValue,
    setAllTodo,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
