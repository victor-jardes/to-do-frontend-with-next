import { IGoToPreviousIndexTodoPageParams } from "@/types/INavigateTodos";

export function goToPreviousIndexTodoPageAux({
  currentPage,
  setCurrentPage,
}: IGoToPreviousIndexTodoPageParams) {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
}
