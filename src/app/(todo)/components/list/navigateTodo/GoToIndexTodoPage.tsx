import { IGoToIndexTodoPageParams } from "@/types/INavigateTodos";
import StateNavigateInPage from "@/app/states/navigate/NavigateInPage";

export function GoToIndexTodoPage({
  pageIndex,
}: Pick<IGoToIndexTodoPageParams, "pageIndex">) {
  const setCurrentPage = StateNavigateInPage((state) => state.setCurrentPage);
  return (
    <button
      className="btnChildren btnIndex"
      onClick={() => setCurrentPage(pageIndex)}
    >
      {pageIndex}
    </button>
  );
}
