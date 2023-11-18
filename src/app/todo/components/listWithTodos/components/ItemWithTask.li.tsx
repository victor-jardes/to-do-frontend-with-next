import { ButtonFinishedTask } from "./ButtomFinishedTask.button";
import {
  ListWraper,
  StyledListItemWithTask,
} from "../styles/itemWithTask.style";
import useTodos from "@/app/states/todo/useTodo";
import StateNavigateInPage from "@/app/states/navigate/NavigateInPage";

export function ItemWithTasks() {
  const todos = useTodos((state) => state.todos);
  const currentPage = StateNavigateInPage((state) => state.currentPage);

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = todos.slice(startIndex, endIndex);

  return (
    <>
      {currentItems.map(({ id, description, isFinished }) => (
        <ListWraper key={id}>
          <StyledListItemWithTask
            id={id}
            value={description}
            $isFinished={isFinished}
            data-testid={`data-test-item-in-list-${id}`}
          >
            {description}
          </StyledListItemWithTask>
          <ButtonFinishedTask id={id} />
        </ListWraper>
      ))}
    </>
  );
}
