export interface INavigateTodo {
  currentPage: number;
  todos: ITodo[];
  itemsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export interface IGoTonextPageParams extends INavigateTodo {}

export interface IGoToPreviousPageParams
  extends Pick<INavigateTodo, "currentPage" | "setCurrentPage"> {}

export interface IGoToPageParams
  extends Pick<INavigateTodo, "currentPage" | "setCurrentPage"> {
  pageIndex: number;
}
