"use client";

import { useGetContextForList } from "./utils/useGetContextForList";
import React, { useState } from "react";
import { RenderAllTodosWraper } from "./renderAllTodos.style";
import { NavigateTodo } from "./navigateTodo/NavigateTodo";
import { ListWithTodos } from "./listWithTodos/ListWithTodos";
import { ItemWithTasks } from "./listWithTodos/components/ItemWithTask.li";

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
  const { todos } = useGetContextForList();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState<number>(5);

  return (
    <RenderAllTodosWraper>
      {todos.length <= 0 ? (
        <RenderEmpty />
      ) : (
        <ListWithTodos>
          <ItemWithTasks
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </ListWithTodos>
      )}
      <div>
        <NavigateTodo
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          todos={todos}
        />
      </div>
    </RenderAllTodosWraper>
  );
}
