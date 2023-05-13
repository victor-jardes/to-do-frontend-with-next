"use client";

import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import { TodoContextType } from "@/@types/todo";

export default function RenderALlTodos() {
  const { todos } = useContext(TodoContext) as TodoContextType;
  return (
    <>
      <ul>
        {Object.keys(todos[0]).length <= 0 ? (
          <p>empty...</p>
        ) : (
          todos.map(({ id, description }) => <li key={id}>{description}</li>)
        )}
      </ul>
    </>
  );
}
