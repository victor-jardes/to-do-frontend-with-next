import React from "react";
import { screen, render, within, waitFor } from "@testing-library/react";
import TodoProvider from "@/app/context/todoProvider";
import RenderAllTodos from "@/app/(todo)/components/list/RenderAllTodos";
import { ITodo } from "@/types/ITodo";
import { rest } from "msw";
import { mswServer } from "@/apiMocks/mswServer";

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

describe("<renderAllTodos> component", () => {
  describe("sucess case", () => {
    describe("When not contain pending tasks", () => {
      it("should render conditional if not contain tasks in list, and verify your attr too", async () => {
        const TEXT_IN_EMPTY_PARAGRAPH = "empty...";

        render(
          <TodoProvider>
            <RenderAllTodos />
          </TodoProvider>
        );

        const getParagraph = screen.getByText(TEXT_IN_EMPTY_PARAGRAPH);

        expect(getParagraph).toHaveAttribute("id", "empty-value");
        expect(getParagraph).toHaveAttribute(
          "data-testid",
          "data-test-empty-value"
        );

        await waitFor(() => {
          expect(getParagraph.tagName).toBe("P");
          expect(getParagraph.innerHTML).toBe("empty...");
        });
      });
    });

    describe("When contain tasks", () => {
      describe("verify task, <li> tag", () => {
        const UL_DATA_TESTID = "data-test-list-with-todos";

        beforeEach(() => {
          mswServer.use(
            rest.get("http://localhost:3001/todo/findAll", (req, res, ctx) => {
              return res(ctx.status(200), ctx.json(todos));
            })
          );

          render(
            <TodoProvider>
              <RenderAllTodos />
            </TodoProvider>
          );
        });

        it("Should be able render `<UL>` list tag", async () => {
          const UL_TYPE = "UL";
          const UL_ID = "list-with-todos";

          await waitFor(() => {
            const getListWithTodos = screen.getByTestId(UL_DATA_TESTID);

            expect(getListWithTodos).toBeDefined();
            expect(getListWithTodos.tagName).toBe(UL_TYPE);
            expect(getListWithTodos.id).toBe(UL_ID);
            expect(getListWithTodos.getAttribute("data-testid")).toBe(
              UL_DATA_TESTID
            );
            expect(getListWithTodos.getAttribute("role")).toBe("list");
          });
        });

        it("Should be able contain all tasks", async () => {
          await waitFor(() => {
            const getListWithTodos = screen.getByTestId(UL_DATA_TESTID);
            const getAllItensInList =
              within(getListWithTodos).getAllByRole("listitem");

            expect(getAllItensInList).toBeDefined();
            expect(getAllItensInList.length).toBe(3);
          });
        });

        it("Should be able render task in list with correct text", async () => {
          await waitFor(() => {
            const getListWithTodos = screen.getByTestId(UL_DATA_TESTID);
            const getAllItensInList =
              within(getListWithTodos).getAllByRole("listitem");

            expect(getAllItensInList[0].textContent).toBe("study english");
            expect(getAllItensInList[1].textContent).toBe("wash car");
            expect(getAllItensInList[2].textContent).toBe("cleam my house");
          });
        });

        it("Should be able render task in list with correct id", async () => {
          await waitFor(() => {
            const getListWithTodos = screen.getByTestId(UL_DATA_TESTID);
            const getAllItensInList =
              within(getListWithTodos).getAllByRole("listitem");

            expect(getAllItensInList[0].id).toBe("1");
            expect(getAllItensInList[1].id).toBe("2");
            expect(getAllItensInList[2].id).toBe("3");
          });
        });

        it("Should be able render task in list with correct collor because task status", async () => {
          await waitFor(() => {
            const getListWithTodos = screen.getByTestId(UL_DATA_TESTID);
            const getItensInList =
              within(getListWithTodos).getAllByRole("listitem");

            expect(getItensInList[0].style.backgroundColor).toBe("inherit");
            expect(getItensInList[1].style.backgroundColor).toBe("inherit");
            expect(getItensInList[2].style.backgroundColor).toBe("red");
          });
        });
      });

      describe("verify button in task", () => {
        const UL_DATA_TESTID = "data-test-list-with-todos";

        it("should be able render button, and your attributes", async () => {
          mswServer.use(
            rest.get("http://localhost:3001/todo/findAll", (req, res, ctx) => {
              return res(ctx.status(200), ctx.json(todos));
            })
          );

          render(
            <TodoProvider>
              <RenderAllTodos />
            </TodoProvider>
          );

          await waitFor(() => {
            const getListWithTodos = screen.getByTestId(UL_DATA_TESTID);
            const getAllButtonsInList =
              within(getListWithTodos).getAllByRole("button");

            expect(getAllButtonsInList[0].getAttribute("data-testid")).toBe(
              `data-test-button-complet-${1}`
            );
            expect(getAllButtonsInList[1].getAttribute("data-testid")).toBe(
              `data-test-button-complet-${2}`
            );
            expect(getAllButtonsInList[2].getAttribute("data-testid")).toBe(
              `data-test-button-complet-${3}`
            );

            expect(getAllButtonsInList[0].innerHTML).toBe("COMPLET");
            expect(getAllButtonsInList[0]).toBeVisible();
            expect(getAllButtonsInList[1].innerHTML).toBe("COMPLET");
            expect(getAllButtonsInList[1]).toBeVisible();
            expect(getAllButtonsInList[2].innerHTML).toBe("COMPLET");
            expect(getAllButtonsInList[2]).toBeVisible();
          });
        });
      });
    });
  });
});
