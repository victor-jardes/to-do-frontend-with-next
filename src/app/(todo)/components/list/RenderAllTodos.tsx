"use client";

import { ITodo, TodoContextType } from "@/types/ITodo";
import { useGetContextForList } from "./utils/useGetContextForList";
import { Fragment } from "react";
import {
  BlockWithListOfAllTodos,
  StyledListItemWithTask,
  ListWraper,
  TextContainer,
} from "./renderAllTodos.style";

export function RenderEmpty() {
  return (
    <>
      <p data-testid="data-test-empty-value" id="empty-value">
        empty...
      </p>
    </>
  );
}

export function ListWithtodos({
  id,
  isFinished,
  description,
  finishedTodo,
}: ITodo & Pick<TodoContextType, "finishedTodo">) {
  return (
    <ListWraper>
      <TextContainer>
        <StyledListItemWithTask
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
        </StyledListItemWithTask>
      </TextContainer>
      <button
        id={`button-complet-${id}`}
        type="button"
        value={id}
        onClick={(element) => finishedTodo(element.currentTarget.value)}
        data-testid={`data-test-button-complet-${id}`}
      >
        COMPLET
      </button>
    </ListWraper>
  );
}

export default function RenderAllTodos() {
  const { finishedTodo, todos } = useGetContextForList();

  return (
    <>
      {todos.length <= 0 ? (
        <RenderEmpty />
      ) : (
        <BlockWithListOfAllTodos>
          <ul
            id="list-with-todos"
            role="list"
            data-testid="data-test-list-with-todos"
          >
            {todos.map(({ id, description, isFinished }) => (
              <Fragment key={id}>
                <ListWithtodos
                  id={id}
                  isFinished={isFinished}
                  description={description}
                  finishedTodo={finishedTodo}
                />
              </Fragment>
            ))}
          </ul>
        </BlockWithListOfAllTodos>
      )}
    </>
  );
}
