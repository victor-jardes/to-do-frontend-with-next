import {
  INavigateTodo,
  IGoTonextPageParams,
  IGoToPreviousPageParams,
} from "@/types/INavigateTodos";

function goToNextPage({
  currentPage,
  todos,
  itemsPerPage,
  setCurrentPage,
}: IGoTonextPageParams) {
  if (currentPage < Math.ceil(todos.length / itemsPerPage)) {
    setCurrentPage(currentPage + 1);
  }
}

function goToPreviousPage({
  currentPage,
  setCurrentPage,
}: IGoToPreviousPageParams) {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
}

export function NavigateTodo({
  currentPage,
  itemsPerPage,
  setCurrentPage,
  todos,
}: INavigateTodo) {
  return (
    <>
      <button onClick={() => goToPreviousPage({ currentPage, setCurrentPage })}>
        Previous
      </button>
      <button
        onClick={() =>
          goToNextPage({ currentPage, itemsPerPage, setCurrentPage, todos })
        }
      >
        Next
      </button>
    </>
  );
}
