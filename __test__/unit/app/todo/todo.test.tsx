import React from "react";
import { screen, render, within, waitFor } from "@testing-library/react";
import Todo from "@/app/todo/Todo";
import TodoProvider from "@/app/context/todoProvider";
import userEvent from "@testing-library/user-event";

describe("<Todo> component", () => {
  it("should be able to complete the entire flow cycle", async () => {
    const user = userEvent.setup();

    render(
      <TodoProvider>
        <Todo />
      </TodoProvider>
    );

    const TASK_FOR_WRITE = "wash to car";
    const BUTTON_LABEL_ADD_TASK = "ADD your todo";
    const INPUT_WRITE_LABEtEXT = "Write you task here";
    const DATA_TESTID_LIST_WITH_ALL_TODOS = "data-test-list-with-todos";

    const ITEM_NOT_FINISHED_TASK_COLOR = "inherit";
    const ITEM_FINISHED_TASK_COLOR = "red";
    const DATA_TEST_ID_EMPTY_CONDITIONAL = "data-test-empty-value";

    const getInputForWrite = screen.getByLabelText(INPUT_WRITE_LABEtEXT);
    const getButtonAdd = screen.getByLabelText(BUTTON_LABEL_ADD_TASK);
    expect(getInputForWrite).toBeVisible();
    expect(getButtonAdd).toBeVisible();

    const getEmptyParagraph = screen.getByTestId(
      DATA_TEST_ID_EMPTY_CONDITIONAL
    );
    expect(getEmptyParagraph).toBeVisible();
    expect(getEmptyParagraph.innerHTML).toBe("empty...");

    await user.type(getInputForWrite, TASK_FOR_WRITE);

    await waitFor(() => {
      expect(getInputForWrite.getAttribute("value")).toBe(TASK_FOR_WRITE);
      expect(getButtonAdd).toBeEnabled();
    });

    await user.click(getButtonAdd);
    await waitFor(() => {
      expect(
        screen.queryByTestId(DATA_TEST_ID_EMPTY_CONDITIONAL)
      ).not.toBeInTheDocument();
    });

    expect(getInputForWrite.getAttribute("value")).toBe("");
    expect(getButtonAdd).toBeDisabled();

    const getListWithAllTasks = screen.getByTestId(
      DATA_TESTID_LIST_WITH_ALL_TODOS
    );
    expect(getListWithAllTasks).toBeInTheDocument();

    const getAllTaskInList =
      within(getListWithAllTasks).getAllByRole("listitem");
    expect(getAllTaskInList.length).toBe(1);

    expect(getAllTaskInList[0].getAttribute("value")).toBe(TASK_FOR_WRITE);
    expect(getAllTaskInList[0].style.backgroundColor).toBe(
      ITEM_NOT_FINISHED_TASK_COLOR
    );

    const getTaskButtonInList =
      within(getListWithAllTasks).getAllByRole("button");
    await user.click(getTaskButtonInList[0]);

    expect(getAllTaskInList[0].style.backgroundColor).toBe(
      ITEM_FINISHED_TASK_COLOR
    );
  });
});
