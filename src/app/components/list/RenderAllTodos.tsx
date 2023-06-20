"use client";

import { ITodo } from "@/types/ITodo";
import { useGetContextForList } from "./utils/useGetContextForList";

export function RenderEmpty() {
  return (
    <>
      <p data-testid="data-test-empty-value" id="empty-value">
        empty...
      </p>
    </>
  );
}

interface IRenderAllTodos {
  listWithTodos?: ITodo[];
}
export default function RenderAllTodos({ listWithTodos }: IRenderAllTodos) {
  let todos: ITodo[];

  const { finishedTodo, todos: lala } = useGetContextForList();

  if (listWithTodos) {
    todos = listWithTodos;
  } else {
    todos = lala;
  }

  return (
    <>
      {todos.length <= 0 && <RenderEmpty />}
      <ul
        id="list-with-todos"
        role="list"
        data-testid="data-test-list-with-todos"
      >
        {todos.map(({ id, description, isFinished }) => (
          <div key={id}>
            <li
              style={
                isFinished
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "inherit" }
              }
              id={id}
              data-testid={`data-test-item-in-list-${id}`}
              value={description}
            >
              {description}
            </li>
            <button
              id={`button-complet-${id}`}
              type="button"
              value={id}
              onClick={(element) => finishedTodo(element.currentTarget.value)}
              data-testid={`data-test-button-complet-${id}`}
            >
              COMPLET
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
