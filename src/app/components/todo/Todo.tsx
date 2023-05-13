import InputsTodo from "./InputsTodo";
import RenderALlTodos from "./RenderAllTodos";
import TodoProvider from "../../context/todoProvider";

export default function Todo() {
  return (
    <>
      <main>
        <TodoProvider>
          <InputsTodo />
          <RenderALlTodos />
        </TodoProvider>
      </main>
    </>
  );
}
