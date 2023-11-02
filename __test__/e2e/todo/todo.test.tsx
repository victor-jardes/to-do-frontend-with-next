import React from "react";
import { screen, render, within, waitFor } from "@testing-library/react";
import Todo from "@/app/(todo)/page";
// import TodoProvider from "@/app/context/todoProvider";
import userEvent from "@testing-library/user-event";

describe.only("<Todo> component", () => {
  it("should be able to complete the entire flow cycle", async () => {
    const user = userEvent.setup();

    render(<Todo />);

    const TASK_FOR_WRITE = "wash to car";
    const BUTTON_LABEL_ADD_TASK = "ADD your task";
    const INPUT_WRITE_LABEtEXT = "Write your task here";
    const DATA_TESTID_LIST_WITH_ALL_TODOS = "data-test-list-with-todos";
    const EMPTY_COMPONENT_TEXT = "EMPTY...";

    const DATA_TEST_ID_EMPTY_CONDITIONAL = "data-test-empty-value";

    const getInputForWrite = screen.getByPlaceholderText(INPUT_WRITE_LABEtEXT);
    const getButtonAdd = screen.getByText(BUTTON_LABEL_ADD_TASK);
    expect(getInputForWrite).toBeVisible();
    expect(getButtonAdd).toBeVisible();

    const getEmptyParagraph = screen.getByTestId(
      DATA_TEST_ID_EMPTY_CONDITIONAL
    );
    expect(getEmptyParagraph).toBeVisible();
    expect(getEmptyParagraph.innerHTML).toBe(EMPTY_COMPONENT_TEXT);

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

    const getTaskButtonInList =
      within(getListWithAllTasks).getAllByRole("button");
    await user.click(getTaskButtonInList[0]);
  });
});
