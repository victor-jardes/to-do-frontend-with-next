import { Dispatch } from "react";
import { IButtonValueAttribute } from "./IButtonValueAttribute";

export interface ITodo {
  id: string;
  description: string;
  isFinished: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  taskValue: string;
  saveTodo: () => void;
  setAllTodo: Dispatch<ITodo[]>;
  finishedTodo: (id: string) => void;
  setTaskValue: Dispatch<string>;
};
