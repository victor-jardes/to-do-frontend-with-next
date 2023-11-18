import InputsTodo from "./components/inputs/InputsTodo";
import { ListWithTodos } from "./components/listWithTodos/ListWithTodos";
import { NavigateTodo } from "./components/navigateTodo/NavigateTodo";
import { StyledMainTodoPage } from "./page.style";

export default function Todo() {
  return (
    <StyledMainTodoPage>
      <InputsTodo />
      <ListWithTodos />
      <NavigateTodo />
    </StyledMainTodoPage>
  );
}
