import { INavigateIndexTodo } from "@/types/INavigateTodos";

export function goToIndexTodoPageAux(
  pageIndex: number,
  { setCurrentPage }: Pick<INavigateIndexTodo, "setCurrentPage">
) {
  setCurrentPage(pageIndex);
}
