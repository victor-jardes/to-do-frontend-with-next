"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { GoToIndexTodoPage } from "./components/GoToIndexTodoPage";
import { GoToPreviousIndexTodoPage } from "./components/GoToPreviousIndexTodoPage";
import { GoToNextIndexTodoPage } from "./components/GoToNextIndexTodoPage";
import StateNumberOfPagesStore from "@/app/states/navigate/numberOfPages";
import StateMultipleAndNumberInIndex from "@/app/states/navigate/multipleAndNumberInIndex";
import useTodos from "@/app/states/todo/useTodo";
import { StyledNavigateWraper } from "./styles/navigateWraper.style";

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
    <StyledNavigateWraper>
      <GoToPreviousIndexTodoPage />
      {""}
      <div>
        {numberOfPages.map((pageIndex) => (
          <GoToIndexTodoPage pageIndex={pageIndex} key={pageIndex} />
        ))}
      </div>
      {""}
      <GoToNextIndexTodoPage />
    </StyledNavigateWraper>
  );
}
