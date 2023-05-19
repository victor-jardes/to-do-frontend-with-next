import { IButtonValueAttribute } from "@/@types/IButtonValueAttribute";
import { ITodo } from "@/@types/todo";

const isEmptyValue = () => {
  return <p data-testid="data-test-empty-value">empty...</p>;
};

const itemInList = (
  { id, description, isFinished }: ITodo,
  finishedTodo: (e: IButtonValueAttribute) => void
) => {
  return (
    <li
      key={id}
      style={
        isFinished ? { backgroundColor: "red" } : { backgroundColor: "inherit" }
      }
      id={id}
      data-testid={`data-test-item-in-list-${id}`}
    >
      {description}
      <button
        type="button"
        onClick={(e: IButtonValueAttribute) => finishedTodo(e)}
        value={id}
        data-testid={`data-test-button-complet-${id}`}
      >
        COMPLET
      </button>
    </li>
  );
};

interface propsType {
  todos: ITodo[];
  finishedTodo: (e: IButtonValueAttribute) => void;
}

export default function RenderALlTodos({ todos, finishedTodo }: propsType) {
  return (
    <>
      {todos.length <= 0 && isEmptyValue()}
      <ul datat-testid="data-test-list-with-todos">
        {todos.length > 0 &&
          todos.map(({ id, description, isFinished }) =>
            itemInList({ id, description, isFinished }, finishedTodo)
          )}
      </ul>
    </>
  );
}
