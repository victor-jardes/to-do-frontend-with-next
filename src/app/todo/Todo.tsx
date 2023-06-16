"use client";

import { useContext } from "react";
import { TodoContextType } from "@/types/ITodo";
import { TodoContext } from "@/app/context/todoContext";
import InputsTodo from "../components/InputsTodo";
import RenderAllTodos from "../components/RenderAllTodos";

export default function Todo() {
  const { todos } = useContext(TodoContext) as TodoContextType;
  return (
    <main>
      <InputsTodo />
      <RenderAllTodos todos={todos} />
    </main>
  );
}
