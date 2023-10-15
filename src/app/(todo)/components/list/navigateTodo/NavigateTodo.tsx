"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { GoToIndexTodoPage } from "./GoToIndexTodoPage";
import { GoToPreviousIndexTodoPage } from "./GoToPreviousIndexTodoPage";
import { GoToNextIndexTodoPage } from "./GoToNextIndexTodoPage";
import StateNumberOfPagesStore from "@/app/states/navigate/numberOfPages";
import StateMultipleAndNumberInIndex from "@/app/states/navigate/multipleAndNumberInIndex";
import { useGetContextForList } from "../utils/useGetContextForList";

export function NavigateTodo() {
  const { todos } = useGetContextForList();

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
      <GoToNextIndexTodoPage todos={todos} />
    </>
  );
}
