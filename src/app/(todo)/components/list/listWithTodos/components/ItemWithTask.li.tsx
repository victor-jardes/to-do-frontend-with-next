import { INavigateIndexTodo } from "@/types/INavigateTodos";
import {
  ListWraper,
  StyledListItemWithTask,
  TextContainer,
} from "../../renderAllTodos.style";
import { useGetContextForList } from "../../utils/useGetContextForList";
import { ButtonFinishedTask } from "./ButtomFinishedTask.button";

export function ItemWithTasks({
  currentPage,
  itemsPerPage,
}: Pick<INavigateIndexTodo, "currentPage" | "itemsPerPage">) {
  const { todos } = useGetContextForList();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = todos.slice(startIndex, endIndex);

  return (
    <>
      {currentItems.map(({ id, description, isFinished }) => (
        <ListWraper key={id}>
          <TextContainer>
            <StyledListItemWithTask
              id={id}
              value={description}
              $isFinished={isFinished}
              data-testid={`data-test-item-in-list-${id}`}
            >
              {description}
            </StyledListItemWithTask>
          </TextContainer>
          <ButtonFinishedTask id={id} />
        </ListWraper>
      ))}
    </>
  );
}
