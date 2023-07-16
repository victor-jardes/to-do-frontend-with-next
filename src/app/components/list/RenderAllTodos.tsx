"use client";

import { useGetContextForList } from "./utils/useGetContextForList";
import { Fragment } from "react";

export function RenderEmpty() {
  return (
    <>
      <p data-testid="data-test-empty-value" id="empty-value">
        empty...
      </p>
    </>
  );
}

export default function RenderAllTodos() {
  const { finishedTodo, todos } = useGetContextForList();

  return (
    <>
      {todos.length <= 0 ? (
        <RenderEmpty />
      ) : (
        <ul
          id="list-with-todos"
          role="list"
          data-testid="data-test-list-with-todos"
        >
          {todos.map(({ id, description, isFinished }) => (
            <Fragment key={id}>
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
            </Fragment>
          ))}
        </ul>
      )}

      {}
    </>
  );
}
