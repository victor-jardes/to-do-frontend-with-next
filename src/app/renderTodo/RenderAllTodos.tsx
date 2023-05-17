import { IButtonValueAttribute } from "@/@types/IButtonValueAttribute";
import { ITodo } from "@/@types/todo";

const isEmptyValue = () => {
  return <p>empty...</p>;
};

interface lala {
  todos: ITodo[];
  finishedTodo: (e: IButtonValueAttribute) => void;
}

export default function RenderALlTodos({ todos, finishedTodo }: lala) {
  return (
    <>
      <ul>
        {todos.length <= 0
          ? isEmptyValue()
          : todos.map(({ id, description, isFinished }) => (
              <li
                key={id}
                style={
                  isFinished
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "inherit" }
                }
              >
                {description}
                <button
                  type="button"
                  value={id}
                  onClick={(e: IButtonValueAttribute) => finishedTodo(e)}
                >
                  complet
                </button>
              </li>
            ))}
      </ul>
    </>
  );
}
