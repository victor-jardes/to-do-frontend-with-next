/* eslint-disable react-hooks/exhaustive-deps */
import { INavigateIndexTodo } from "@/types/INavigateTodos";
import { useEffect, useState } from "react";
import { GoToIndexTodoPage } from "./GoToIndexTodoPage";
import { GoToPreviousIndexTodoPage } from "./GoToPreviousIndexTodoPage";
import { GoToNextIndexTodoPage } from "./GoToNextIndexTodoPage";

export function NavigateTodo({
  currentPage,
  itemsPerPage,
  setCurrentPage,
  todos,
}: INavigateIndexTodo) {
  const [numberOfPages, setNumberOfPages] = useState<number[]>([1]);
  const [multipleAndNumberInIndex, setMultipleAndNumberInIndex] =
    useState<number>(1);
  const [moreOneNumberInIndex] = useState<number>(1);

  useEffect(() => {
    if (!numberOfPages.includes(multipleAndNumberInIndex)) {
      setNumberOfPages((prevPages) => [...prevPages, multipleAndNumberInIndex]);
    }
  }, [multipleAndNumberInIndex]);

  useEffect(() => {
    if (itemsPerPage * multipleAndNumberInIndex < todos.length) {
      setMultipleAndNumberInIndex((prev) => prev + moreOneNumberInIndex);
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
