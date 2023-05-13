"use client";

import { ITodo } from "@/@types/todo";
import { TodoContext } from "./todoContext";
import { useState } from "react";
import { IComponentChildren } from "@/@types/IComponentChildren";

export default function TodoProvider({ children }: IComponentChildren) {
  const [todos, setAllTodos] = useState<ITodo[]>([{ id: "", description: "" }]);

  const saveTodo = ({ description }: ITodo) => {
    const newTodo: ITodo = {
      id: self.crypto.randomUUID(),
      description,
    };
    setAllTodos([...todos, newTodo]);
  };

  const values = {
    todos,
    saveTodo,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
