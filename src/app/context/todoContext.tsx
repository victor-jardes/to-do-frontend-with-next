import { TodoContextType } from "@/types/ITodo";
import { createContext } from "react";

export const TodoContext = createContext<TodoContextType | null>(null);
