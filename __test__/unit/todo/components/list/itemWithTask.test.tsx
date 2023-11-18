import { mswServer } from "@/apiMocks/mswServer";
import { ItemWithTasks } from "@/app/todo/components/list/listWithTodos/components/ItemWithTask.li";
import useTodos from "@/app/states/todo/useTodo";
import { ITodo } from "@/types/ITodo";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";

const todos: ITodo[] = [
  {
    id: "1",
    isFinished: false,
    description: "study english",
  },
  {
    id: "2",
    isFinished: false,
    description: "wash car",
  },
  {
    id: "3",
    isFinished: true,
    description: "cleam my house",
  },
];

describe("render `ItemWithTasks` component", () => {
  beforeEach(() => {
    useTodos.getState().reset();
    mswServer.use(
      rest.get("http://localhost:3001/todo/findAll", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(todos));
      })
    );
  });

  it("should be able render correct `tag` and `lenght` and be defined", async () => {
    await waitFor(() => useTodos.getState().fetchAllTodos());

    const LENGT_TODOS = todos.length;

    render(<ItemWithTasks />);

    await waitFor(() => {
      const GET_ALL_LI_TAGS = screen.getAllByRole("listitem");

      expect(GET_ALL_LI_TAGS).toBeDefined();
      expect(GET_ALL_LI_TAGS).toHaveLength(LENGT_TODOS);
    });
  });

  it("should be able correct `attributes` in `<li>` tag", async () => {
    await waitFor(() => useTodos.getState().fetchAllTodos());

    const FIRST_TASK_ID = todos[0]["id"];
    const SECOND_TASK_ID = todos[1]["id"];
    const THIRD_TASK_ID = todos[2]["id"];

    const FIRST_TASK_TEXT = todos[0]["description"];
    const SECOND_TASK_TEXT = todos[1]["description"];
    const THIRD_TASK_TEXT = todos[2]["description"];

    render(<ItemWithTasks />);

    await waitFor(() => {
      const GET_FIRS_TASK_TBY_TEST_ID = screen.getByTestId(
        `data-test-item-in-list-${FIRST_TASK_ID}`
      );
      const GET_SECOND_TASK_TBY_TEST_ID = screen.getByTestId(
        `data-test-item-in-list-${SECOND_TASK_ID}`
      );
      const GET_THIRD_TASK_TBY_TEST_ID = screen.getByTestId(
        `data-test-item-in-list-${THIRD_TASK_ID}`
      );

      expect(GET_FIRS_TASK_TBY_TEST_ID).toBeVisible();
      expect(GET_SECOND_TASK_TBY_TEST_ID).toBeVisible();
      expect(GET_THIRD_TASK_TBY_TEST_ID).toBeVisible();

      expect(GET_FIRS_TASK_TBY_TEST_ID.getAttribute("id")).toBe(FIRST_TASK_ID);
      expect(GET_SECOND_TASK_TBY_TEST_ID.getAttribute("id")).toBe(
        SECOND_TASK_ID
      );
      expect(GET_THIRD_TASK_TBY_TEST_ID.getAttribute("id")).toBe(THIRD_TASK_ID);

      expect(GET_FIRS_TASK_TBY_TEST_ID.getAttribute("value")).toBe(
        FIRST_TASK_TEXT
      );
      expect(GET_SECOND_TASK_TBY_TEST_ID.getAttribute("value")).toBe(
        SECOND_TASK_TEXT
      );
      expect(GET_THIRD_TASK_TBY_TEST_ID.getAttribute("value")).toBe(
        THIRD_TASK_TEXT
      );
    });
  });

  it("should be ablre render `<li>` tag with correct text", async () => {
    await waitFor(() => useTodos.getState().fetchAllTodos());
    const FIRST_TASK = todos[0]["description"];
    const SECOND_TASK = todos[1]["description"];
    const THIRD_TASK = todos[2]["description"];

    render(<ItemWithTasks />);

    await waitFor(() => {
      const GET_FIRST_TASK = screen.getByText(FIRST_TASK);
      const GET_SECOND_TASK = screen.getByText(SECOND_TASK);
      const GET_THIRD_TASK = screen.getByText(THIRD_TASK);

      expect(GET_FIRST_TASK.innerHTML).toBe(FIRST_TASK);
      expect(GET_SECOND_TASK.innerHTML).toBe(SECOND_TASK);
      expect(GET_THIRD_TASK.innerHTML).toBe(THIRD_TASK);
    });
  });
});
