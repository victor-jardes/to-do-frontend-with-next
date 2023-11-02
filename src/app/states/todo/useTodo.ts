import { requestForCreateTask } from "@/app/api/todo/createTask";
import { requestForGetAllTasks } from "@/app/api/todo/getAllTasks";
import { ITodo } from "@/types/ITodo";
import { create } from "zustand";

type State = {
  todos: ITodo[];
};

type Action = {
  addTodo: ({ description, id }: Omit<ITodo, "isFinished">) => void;
  fetchAllTodos: () => void;
  finishedTodo: (id: string) => void;
  reset: () => void;
};

const initialState: State = {
  todos: [],
};

const useTodos = create<State & Action>()((set) => ({
  ...initialState,
  fetchAllTodos: async () => {
    const response = await requestForGetAllTasks();
    set({ todos: response });
  },
  addTodo: async ({ description, id }) => {
    const req = await requestForCreateTask({ description, id });
    set((state) => ({
      todos: [...state.todos, req as ITodo],
    }));
  },
  finishedTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todos) =>
        todos.id === id
          ? ({ ...todos, isFinished: !todos.isFinished } as ITodo)
          : todos
      ),
    }));
  },
  reset: () => {
    set(initialState);
  },
}));

export default useTodos;
