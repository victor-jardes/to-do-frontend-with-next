import { Dispatch } from "react";
import { ITodo } from "@/@types/todo";
import { InputValueAttibute } from "@/@types/IInputValueAttribute";

interface propsType {
  taskValue: string;
  setTaskValue: Dispatch<string>;
  saveTodo: ({ description }: Partial<ITodo>) => void;
}

export default function InputsTodo({
  taskValue,
  setTaskValue,
  saveTodo,
}: propsType) {
  const handleWriteTask = ({ target }: InputValueAttibute) => {
    setTaskValue(target.value);
  };

  const handleAddTask = (description: string) => {
    if (typeof saveTodo === "function") {
      saveTodo({ description });
      setTaskValue("");
    } else {
      return console.log("save todo is not a function");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Write your task here"
        onChange={(e) => handleWriteTask(e)}
        value={taskValue}
        data-testid="data-test-write-todo"
      />
      <input
        type="button"
        value="ADD"
        onClick={() => handleAddTask(taskValue)}
        disabled={taskValue.length >= 2 ? false : true}
        data-testid="data-test-button-add-todo"
      />
    </>
  );
}
