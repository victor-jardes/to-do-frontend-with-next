"use client";

import { useGetContextForList } from "./utils/useGetContextForList";
import React from "react";
import { RenderAllTodosWraper } from "./renderAllTodos.style";
import { ListWithTodos } from "./listWithTodos/ListWithTodos";
import { ItemWithTasks } from "./listWithTodos/components/ItemWithTask.li";
import StateNavigateInPage from "@/app/states/navigate/NavigateInPage";

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

  const currentPage = StateNavigateInPage((state) => state.currentPage);

  const itemsPerPage = 5;

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
    </RenderAllTodosWraper>
  );
}
