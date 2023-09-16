import InputsTodo from "./components/inputs/InputsTodo";
import RenderAllTodos from "./components/list/RenderAllTodos";
import { StyledMainTodoPage } from "./page.style";

export default function Todo() {
  return (
    <StyledMainTodoPage>
      <InputsTodo />
      <RenderAllTodos />
    </StyledMainTodoPage>
  );
}
