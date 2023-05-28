"use client";
import React, { useContext } from "react";
import { InputValueAttibute } from "@/@types/IInputValueAttribute";
import { TodoContext } from "../context/todoContext";
import { TodoContextType } from "@/@types/ITodo";

type InputWriteTodoProps = {
  taskValue: string;
  handleWriteTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWriteTodo = ({
  handleWriteTask,
  taskValue,
}: InputWriteTodoProps) => {
  return (
    <>
      <label htmlFor="input-for-write-task">Write you task here</label>
      <input
        id="input-for-write-task"
        type="text"
        value={taskValue}
        onChange={(e) => handleWriteTask(e)}
        placeholder="EX: wash to car"
        data-testid="data-test-write-todo"
      />
    </>
  );
};

interface ButtonAddTodoProps {
  taskValue: string;
  handleAddTask: () => void;
}

const ButtonAddTodo = ({ handleAddTask, taskValue }: ButtonAddTodoProps) => {
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
};

export default function InputsTodo() {
  const { saveTodo, setTaskValue, taskValue } = useContext(
    TodoContext
  ) as TodoContextType;
  const handleWriteTask = ({ target }: InputValueAttibute) => {
    setTaskValue(target.value);
  };

  const handleAddTask = () => {
    saveTodo();
    setTaskValue("");
  };

  return (
    <>
      <InputWriteTodo handleWriteTask={handleWriteTask} taskValue={taskValue} />
      <ButtonAddTodo handleAddTask={handleAddTask} taskValue={taskValue} />
    </>
  );
}
