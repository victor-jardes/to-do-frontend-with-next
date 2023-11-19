import { ITodo } from "@/types/ITodo";
import useTodos from "@/app/states/todo/useTodo";

export function ButtonFinishedTask({ id }: Pick<ITodo, "id">) {
  const finishedTodo = useTodos((state) => state.finishedTodo);
  return (
    <button
      id={`button-complet-${id}`}
      type="button"
      value={id}
      onClick={(element) => finishedTodo(element.currentTarget.value)}
      data-testid={`data-test-button-complet-${id}`}
    >
      COMPLET
    </button>
  );
}
