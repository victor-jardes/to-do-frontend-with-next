import { mswServer } from "@/apiMocks/mswServer";
import { ListWithTodos } from "@/app/todo/components/listWithTodos/ListWithTodos";
import { ItemWithTasks } from "@/app/todo/components/listWithTodos/components/ItemWithTask.li";
import useTodos from "@/app/states/todo/useTodo";
import { ITodo } from "@/types/ITodo";
import { render, screen, waitFor, within } from "@testing-library/react";
import { rest } from "msw";
import { v4 as uuidv4 } from "uuid";

const todos: ITodo[] = [
  {
    id: uuidv4(),
    isFinished: false,
    description: "study english",
  },
  {
    id: uuidv4(),
    isFinished: false,
    description: "wash car",
  },
  {
    id: "3",
    isFinished: true,
    description: "cleam my house",
  },
];

describe("test `ListWithTodos` component", () => {
  beforeEach(async () => {
    mswServer.use(
      rest.get("http://localhost:3001/todo/findAll", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(todos));
      })
    );

    await useTodos.getState().fetchAllTodos();
  });

  it("should ble able render `<ul>` correct tag ", () => {
    const UL_DATA_TESTID = "data-test-list-with-todos";
    const UL_ID = "list-with-todos";
    const UL_ROLE = "list";

    render(<ListWithTodos />);

    const GET_UL_TAG = screen.getByRole("list");

    expect(GET_UL_TAG).toBeVisible();
    expect(GET_UL_TAG).toHaveAttribute("id", UL_ID);
    expect(GET_UL_TAG).toHaveAttribute("role", UL_ROLE);
    expect(GET_UL_TAG).toHaveAttribute("data-testid", UL_DATA_TESTID);
  });

  it("Should be able contain all tasks", async () => {
    const UL_DATA_TESTID = "data-test-list-with-todos";

    render(
      <ListWithTodos>
        <ItemWithTasks />
      </ListWithTodos>
    );

    await waitFor(() => {
      const getListWithTodos = screen.getByTestId(UL_DATA_TESTID);
      const getAllItensInList =
        within(getListWithTodos).getAllByRole("listitem");

      expect(getAllItensInList).toBeDefined();
      expect(getAllItensInList.length).toBe(3);
    });
  });
});
