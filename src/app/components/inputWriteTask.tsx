"use client";
import { useContext } from "react";
import { TaskContext } from "./taskContext";

type contextValues = {
  setTaskValue?: (task: string) => {};
};

interface InputValueAttibute {
  target: HTMLInputElement;
}

export default function InputWriteText() {
  const { setTaskValue }: contextValues = useContext(TaskContext);

  const handleTask = ({ target }: InputValueAttibute) => {
    setTaskValue ? setTaskValue(target.value) : "not difened";
  };

  return (
    <>
      <input
        type="text"
        placeholder="write your task here"
        onChange={(e) => handleTask(e)}
      />
    </>
  );
}
