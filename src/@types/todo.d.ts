import { IButtonValueAttribute } from "./IButtonValueAttribute";

export interface ITodo {
  id: string;
  description: string;
  isFinished: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: ({ description }: partial<ITodo>) => void;
  finishedTodo: ({ target }: IButtonValueAttribute) => void;
};
