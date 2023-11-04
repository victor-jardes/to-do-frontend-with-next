"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { GoToIndexTodoPage } from "./GoToIndexTodoPage";
import { GoToPreviousIndexTodoPage } from "./GoToPreviousIndexTodoPage";
import { GoToNextIndexTodoPage } from "./GoToNextIndexTodoPage";
import StateNumberOfPagesStore from "@/app/states/navigate/numberOfPages";
import StateMultipleAndNumberInIndex from "@/app/states/navigate/multipleAndNumberInIndex";
import useTodos from "@/app/states/todo/useTodo";
// changes for push

export function NavigateTodo() {
  const todos = useTodos((state) => state.todos);

  const numberOfPages = StateNumberOfPagesStore((state) => state.numberOfPage);
  const setNumberOfPages = StateNumberOfPagesStore(
    (state) => state.setNumberOfPages
  );

  const multipleAndNumberInIndex = StateMultipleAndNumberInIndex(
    (state) => state.multipleAndNumberInIndex
  );
  const setMultipleAndNumberInIndex = StateMultipleAndNumberInIndex(
    (state) => state.setMultipleAndNumberInIndex
  );

  const itemsPerPage = 5;
  const moreOneNumberInIndex = 1;

  useEffect(() => {
    if (!numberOfPages.includes(multipleAndNumberInIndex)) {
      setNumberOfPages(multipleAndNumberInIndex);
    }
  }, [multipleAndNumberInIndex]);

  useEffect(() => {
    if (itemsPerPage * multipleAndNumberInIndex < todos.length) {
      setMultipleAndNumberInIndex(moreOneNumberInIndex);
    }
  }, [todos]);

  return (
    <>
      <GoToPreviousIndexTodoPage />
      {""}
      {numberOfPages.map((pageIndex) => (
        <GoToIndexTodoPage pageIndex={pageIndex} key={pageIndex} />
      ))}
      {""}
      <GoToNextIndexTodoPage />
    </>
  );
}
