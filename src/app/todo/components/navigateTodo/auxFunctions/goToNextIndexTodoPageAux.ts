import { IGoToNextIndexTodoPageParams } from "@/types/INavigateTodos";

export function goToNextIndexTodoPageAux({
  currentPage,
  todos,
  itemsPerPage,
  setCurrentPage,
}: IGoToNextIndexTodoPageParams) {
  if (currentPage < Math.ceil(todos.length / itemsPerPage)) {
    setCurrentPage(currentPage + 1);
  }
}
