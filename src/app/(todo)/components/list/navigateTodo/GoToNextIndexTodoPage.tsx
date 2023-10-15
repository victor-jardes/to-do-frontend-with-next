import { IGoToNextIndexTodoPageParams } from "@/types/INavigateTodos";
import StateNavigateInPage from "@/app/states/navigate/NavigateInPage";
import { goToNextIndexTodoPageAux } from "./auxFunctions/goToNextIndexTodoPageAux";

export function GoToNextIndexTodoPage({
  todos,
}: Pick<IGoToNextIndexTodoPageParams, "todos">) {
  const currentPage = StateNavigateInPage((state) => state.currentPage);
  const setCurrentPage = StateNavigateInPage((state) => state.setCurrentPage);
  const itemsPerPage = 5;

  return (
    <button
      onClick={() =>
        goToNextIndexTodoPageAux({
          currentPage,
          todos,
          itemsPerPage,
          setCurrentPage,
        })
      }
    >
      Next
    </button>
  );
}
