import { IGoToPreviousIndexTodoPageParams } from "@/types/INavigateTodos";
import { goToPreviousIndexTodoPageAux } from "./auxFunctions/goToPreviousIndexTodoPageAux";

export function GoToPreviousIndexTodoPage({
  currentPage,
  setCurrentPage,
}: IGoToPreviousIndexTodoPageParams) {
  return (
    <button
      onClick={() =>
        goToPreviousIndexTodoPageAux({ currentPage, setCurrentPage })
      }
    >
      Previous
    </button>
  );
}
