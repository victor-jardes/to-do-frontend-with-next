export interface ITodo {
  id: string;
  description: string;
}

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: ({ description }: partial<ITodo>) => void;
};
