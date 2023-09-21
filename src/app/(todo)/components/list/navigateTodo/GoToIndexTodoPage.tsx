import { IGoToIndexTodoPageParams } from "@/types/INavigateTodos";
import { goToIndexTodoPageAux } from "./auxFunctions/goToIndexTodoPageAux";

export function GoToIndexTodoPage({
  setCurrentPage,
  pageIndex,
}: IGoToIndexTodoPageParams) {
  return (
    <button onClick={() => goToIndexTodoPageAux(pageIndex, { setCurrentPage })}>
      {pageIndex}
    </button>
  );
}
