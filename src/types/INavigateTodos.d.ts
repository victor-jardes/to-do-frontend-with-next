export interface INavigateIndexTodo {
  currentPage: number;
  todos: ITodo[];
  itemsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export interface IGoToNextIndexTodoPageParams extends INavigateIndexTodo {}

export interface IGoToPreviousIndexTodoPageParams
  extends Pick<INavigateIndexTodo, "currentPage" | "setCurrentPage"> {}

export interface IGoToIndexTodoPageParams
  extends Pick<INavigateIndexTodo, "currentPage" | "setCurrentPage"> {
  pageIndex: number;
}
