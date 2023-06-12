import {
  IDispatchFinishedTodo,
  IDispatchSaveTodo,
} from "@/types/IDispatchTodo";
import { ITodo } from "@/types/ITodo";
import { v4 as uuidv4 } from "uuid";

export const dispatchSaveTodo = ({
  todos,
  setAllTodo,
  description,
}: IDispatchSaveTodo) => {
  const newTodo: ITodo = {
    id: uuidv4(),
    description,
    isFinished: false,
  };
  setAllTodo([...todos, newTodo]);
};

export const dispatchFinishedTodo = ({
  todos,
  id,
  setAllTodo,
}: IDispatchFinishedTodo) => {
  todos.filter((todo: ITodo) => {
    if (todo.id === id) {
      todo.isFinished = !todo.isFinished;
      setAllTodo([...todos]);
    }
  });
};
