import { requestForGetAllTasks } from "@/app/api/todo/getAllTasks";
import { ITodo } from "@/types/ITodo";
import { create } from "zustand";

type State = {
  todos: ITodo[];
};

type Action = {
  addTodo: ({ description, id }: Omit<ITodo, "isFinished">) => void;
  fetchAllTodos: (todos: ITodo[]) => void;
};

const useTodos = create<State & Action>()((set) => ({
  todos: [],
  fetchAllTodos: async () => {
    const response = await requestForGetAllTasks();
    set({ todos: response });
  },
  addTodo: ({ description, id }) => {
    set((state) => ({
      todos: [...state.todos, { id, description } as ITodo],
    }));
  },
}));

export default useTodos;
