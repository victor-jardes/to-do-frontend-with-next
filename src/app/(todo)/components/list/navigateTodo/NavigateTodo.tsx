"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { GoToIndexTodoPage } from "./GoToIndexTodoPage";
import { GoToPreviousIndexTodoPage } from "./GoToPreviousIndexTodoPage";
import { GoToNextIndexTodoPage } from "./GoToNextIndexTodoPage";
import StateNumberOfPagesStore from "@/app/states/navigate/numberOfPages";
import StateMultipleAndNumberInIndex from "@/app/states/navigate/multipleAndNumberInIndex";
import StateNavigateInPage from "@/app/states/navigate/NavigateInPage";
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

  const currentPage = StateNavigateInPage((state) => state.currentPage);
  const setCurrentPage = StateNavigateInPage((state) => state.setCurrentPage);

  const moreOneNumberInIndex = 1;
  const itemsPerPage = 5;

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
      <GoToPreviousIndexTodoPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {numberOfPages.map((pageIndex) => (
        <GoToIndexTodoPage
          pageIndex={pageIndex}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          key={pageIndex}
        />
      ))}
      <GoToNextIndexTodoPage
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        todos={todos}
      />
    </>
  );
}
