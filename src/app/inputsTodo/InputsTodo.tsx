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
    <input
      type="text"
      placeholder="Write your task here"
      onChange={(e) => handleWriteTask(e)}
      value={taskValue}
      data-testid="data-test-write-todo"
    />
  );
};

interface ButtonAddTodoProps {
  taskValue: string;
  handleAddTask: () => void;
}

const ButtonAddTodo = ({ handleAddTask, taskValue }: ButtonAddTodoProps) => {
  return (
    <input
      type="button"
      value="ADD"
      onClick={() => handleAddTask()}
      disabled={taskValue.length >= 2 ? false : true}
      data-testid="data-test-button-add-todo"
    />
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
