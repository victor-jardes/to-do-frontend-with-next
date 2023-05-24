"use client";

import { ITodo, TodoContextType } from "@/@types/ITodo";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

interface IItemInListProps {
  todos: ITodo;
}

const ItemInList = ({
  todos: { id, description, isFinished },
}: IItemInListProps) => {
  const { finishedTodo } = useContext(TodoContext) as TodoContextType;
  return (
    <li
      key={id}
      style={
        isFinished ? { backgroundColor: "red" } : { backgroundColor: "inherit" }
      }
      id={id}
      data-testid={`data-test-item-in-list-${id}`}
    >
      {description}
      <button
        type="button"
        value={id}
        onClick={(element) => finishedTodo(element.currentTarget.value)}
        data-testid={`data-test-button-complet-${id}`}
      >
        COMPLET
      </button>
    </li>
  );
};

interface IRooComponentProps {
  todos: ITodo[];
}

export default function RenderALlTodos({ todos }: IRooComponentProps) {
  return (
    <>
      {todos.length <= 0 && <p data-testid="data-test-empty-value">empty...</p>}
      <ul datat-testid="data-test-list-with-todos">
        {todos.length > 0 &&
          todos.map(({ id, description, isFinished }) => (
            <ItemInList
              todos={{ id, description, isFinished }}
              key={`${description}-${id}`}
            />
          ))}
      </ul>
    </>
  );
}
