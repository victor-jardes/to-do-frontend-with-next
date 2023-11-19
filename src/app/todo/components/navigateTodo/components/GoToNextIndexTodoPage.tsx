import StateNavigateInPage from "@/app/states/navigate/NavigateInPage";
import { goToNextIndexTodoPageAux } from "../utils/goToNextIndexTodoPageAux";
import useTodos from "@/app/states/todo/useTodo";

export function GoToNextIndexTodoPage() {
  const todos = useTodos((state) => state.todos);
  const currentPage = StateNavigateInPage((state) => state.currentPage);
  const setCurrentPage = StateNavigateInPage((state) => state.setCurrentPage);

  const itemsPerPage = 5;

  return (
    <button
      className="btnChildren"
      onClick={() =>
        goToNextIndexTodoPageAux({
          currentPage,
          todos,
          itemsPerPage,
          setCurrentPage,
        })
      }
    >
      &gt;
    </button>
  );
}
