import { goToPreviousIndexTodoPageAux } from "./auxFunctions/goToPreviousIndexTodoPageAux";
import StateNavigateInPage from "@/app/states/navigate/NavigateInPage";

export function GoToPreviousIndexTodoPage() {
  const currentPage = StateNavigateInPage((state) => state.currentPage);
  const setCurrentPage = StateNavigateInPage((state) => state.setCurrentPage);

  return (
    <button
      className="btnChildren"
      onClick={() =>
        goToPreviousIndexTodoPageAux({ currentPage, setCurrentPage })
      }
    >
      &lt;
    </button>
  );
}
