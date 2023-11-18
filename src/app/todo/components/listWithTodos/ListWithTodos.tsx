import { ItemWithTasks } from "./components/ItemWithTask.li";
import useTodos from "@/app/states/todo/useTodo";
import { EmptyListComponent } from "../emptyList/EmptyListComponent";
import { ListWithTask } from "./components/ListWithTasks.ul";
import { StyledAllTodosWraper } from "./styles/listWithTodos.style";

export function ListWithTodos() {
  const todos = useTodos((state) => state.todos);
  return (
    // <>
    <StyledAllTodosWraper>
      {todos.length <= 0 ? (
        <EmptyListComponent />
      ) : (
        <ListWithTask>
          <ItemWithTasks />
        </ListWithTask>
      )}
      {/* </> */}
    </StyledAllTodosWraper>
  );
}
