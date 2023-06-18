import { TodoContext } from "@/app/context/todoContext";
import { TodoContextType } from "@/types/ITodo";
import { useContext } from "react";

export default function ButtonAddTask() {
  const { saveTodo, setTaskValue, taskValue } = useContext(
    TodoContext
  ) as TodoContextType;

  const handleAddTask = () => {
    saveTodo();
    setTaskValue("");
  };
  return (
    <>
      <label htmlFor="button-add-todo">ADD your todo</label>
      <button
        id="button-add-todo"
        type="button"
        value="ADD"
        onClick={() => handleAddTask()}
        disabled={taskValue.length >= 2 ? false : true}
        data-testid="data-test-button-add-todo"
      >
        ADD
      </button>
    </>
  );
}
