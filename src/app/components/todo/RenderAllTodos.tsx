"use client";

import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import { TodoContextType } from "@/@types/todo";
import { IButtonValueAttribute } from "@/@types/IButtonValueAttribute";

const isEmptyValue = () => {
  return <p>empty...</p>;
};

export default function RenderALlTodos() {
  const { todos, finishedTodo } = useContext(TodoContext) as TodoContextType;

  return (
    <>
      <ul>
        {todos.length <= 0
          ? isEmptyValue()
          : todos.map(({ id, description, isFinished }) => (
              <li
                key={id}
                style={
                  isFinished
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "inherit" }
                }
              >
                {description}
                <button
                  type="button"
                  value={id}
                  onClick={(e: IButtonValueAttribute) => finishedTodo(e)}
                >
                  complet
                </button>
              </li>
            ))}
      </ul>
    </>
  );
}
