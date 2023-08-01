import InputsTodo from "./components/inputs/InputsTodo";
import RenderAllTodos from "./components/list/RenderAllTodos";

export default function Todo() {
  return (
    <main>
      <InputsTodo />
      <RenderAllTodos />
    </main>
  );
}
