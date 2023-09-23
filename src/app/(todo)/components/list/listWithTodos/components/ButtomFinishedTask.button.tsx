import { ITodo } from "@/types/ITodo";
import { useGetContextForList } from "../../utils/useGetContextForList";

export function ButtonFinishedTask({ id }: Pick<ITodo, "id">) {
  const { finishedTodo } = useGetContextForList();
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
