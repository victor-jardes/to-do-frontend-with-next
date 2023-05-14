"use client";

import { ITodo } from "@/@types/todo";
import { TodoContext } from "./todoContext";
import { useState } from "react";
import { IComponentChildren } from "@/@types/IComponentChildren";
import { InputValueAttibute } from "@/@types/IInputValueAttribute";

export default function TodoProvider({ children }: IComponentChildren) {
  const [todos, setAllTodos] = useState<ITodo[]>([]);

  const saveTodo = ({ description }: ITodo) => {
    const newTodo: ITodo = {
      id: self.crypto.randomUUID(),
      description,
      isFinished: false,
    };
    setAllTodos([...todos, newTodo]);
  };

  const finishedTodo = ({ target }: InputValueAttibute) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === target.value) {
        todo.isFinished = !todo.isFinished;
        setAllTodos([...todos]);
      }
    });
  };

  const values = {
    todos,
    saveTodo,
    finishedTodo,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
