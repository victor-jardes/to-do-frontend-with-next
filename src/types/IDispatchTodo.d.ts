import { ITodo } from "@/types/ITodo";
import React from "react";
import { IButtonValuAttribute } from "./IButtonValueAttribute";

export interface IDispatchSaveTodo {
  todos: ITodo[];
  setAllTodo: Dispatch<ITodo[]>;
  description: string;
}

export interface IDispatchFinishedTodo {
  id: string;
  todos: ITodo[];
  setAllTodo: Dispatch<ITodo[]>;
}
