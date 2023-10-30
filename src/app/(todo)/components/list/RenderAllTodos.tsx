"use client";

import React from "react";
import { RenderAllTodosWraper } from "./renderAllTodos.style";
import { ListWithTodos } from "./listWithTodos/ListWithTodos";
import { ItemWithTasks } from "./listWithTodos/components/ItemWithTask.li";
import useTodos from "@/app/states/todo/useTodo";
import { EmptyListComponent } from "../emptyList/EmptyListComponent";

export default function RenderAllTodos() {
  const todos = useTodos((state) => state.todos);

  return (
    <RenderAllTodosWraper>
      {todos.length <= 0 ? (
        <EmptyListComponent />
      ) : (
        <ListWithTodos>
          <ItemWithTasks />
        </ListWithTodos>
      )}
    </RenderAllTodosWraper>
  );
}
