import { IGoToNextIndexTodoPageParams } from "@/types/INavigateTodos";
import { goToNextIndexTodoPageAux } from "./auxFunctions/goToNextIndexTodoPageAux";

export function GoToNextIndexTodoPage({
  currentPage,
  todos,
  itemsPerPage,
  setCurrentPage,
}: IGoToNextIndexTodoPageParams) {
  return (
    <button
      onClick={() =>
        goToNextIndexTodoPageAux({
          currentPage,
          itemsPerPage,
          setCurrentPage,
          todos,
        })
      }
    >
      Next
    </button>
  );
}
