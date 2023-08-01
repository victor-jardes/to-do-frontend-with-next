import { TodoContext } from "@/app/context/todoContext";
import { TodoContextType } from "@/types/ITodo";
import { useContext } from "react";

export const useGetContextForList = () => {
  const { todos, finishedTodo, taskValue } = useContext(
    TodoContext
  ) as TodoContextType;
  return { todos, finishedTodo, taskValue };
};
