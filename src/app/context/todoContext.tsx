import { TodoContextType } from "@/@types/todo";
import { createContext } from "react";

export const TodoContext = createContext<TodoContextType | null>(null);
