import StateNavigateInPage from "@/app/states/navigate/NavigateInPage";
import { goToNextIndexTodoPageAux } from "./auxFunctions/goToNextIndexTodoPageAux";
import useTodos from "@/app/states/todo/useTodo";

export function GoToNextIndexTodoPage() {
  const todos = useTodos((state) => state.todos);
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
