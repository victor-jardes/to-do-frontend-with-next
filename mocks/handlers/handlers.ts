import { ITodo } from "@/types/ITodo";
import { rest } from "msw";

const allTodos: ITodo[] = [];

export const handlers = [
  rest.post<Omit<ITodo, "isFinished">>(
    "http://localhost:3001/todo/create",
    (req, res, ctx) => {
      const { id, description } = req.body;

      const isFinished: boolean = false;
      allTodos.push({ id, description, isFinished });

      return res(ctx.status(200), ctx.json({ id, description, isFinished }));
    }
  ),
  rest.get<ITodo>("http://localhost:3001/todo/findAll", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json<ITodo[]>(allTodos));
  }),
  rest.delete("http://localhost:3001/todo/clear", (_req, res, ctx) => {
    allTodos.length = 0;
    return res(ctx.json(allTodos));
  }),
];
