"use client";

import { ITodo, TodoContextType } from "@/types/ITodo";
import { useGetContextForList } from "./utils/useGetContextForList";
import React, { Fragment, useState } from "react";
import {
  BlockWithListOfAllTodos,
  StyledListItemWithTask,
  ListWraper,
  TextContainer,
} from "./renderAllTodos.style";
import { NavigateTodo } from "./navigateTodo/NavigateTodo";

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
          $isFinished={isFinished}
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

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState<number>(5);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = todos.slice(startIndex, endIndex);

  return (
    <>
      <div>
        {todos.length <= 0 ? (
          <RenderEmpty />
        ) : (
          <BlockWithListOfAllTodos>
            <ul
              id="list-with-todos"
              role="list"
              data-testid="data-test-list-with-todos"
            >
              {currentItems.map(({ id, description, isFinished }) => (
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
      </div>
      <div>
        <NavigateTodo
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          todos={todos}
        />
      </div>
    </>
  );
}
