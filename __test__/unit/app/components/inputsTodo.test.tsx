import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoProvider from "@/app/context/todoProvider";
import InputsTodo from "@/app/todo/components/inputs/InputsTodo";

describe("<InputsTodo> component test", () => {
  describe("check attributes in `input` and `button` tag", () => {
    beforeEach(() => {
      render(
        <TodoProvider>
          <InputsTodo />
        </TodoProvider>
      );
    });

    it("should be able render `input` and your attributes", async () => {
      const INPUT_LABEL_VALUE = "Write you task here";

      const INPUT_ID = "input-for-write-task";
      const INPUT_TYPE = "text";
      const MY_PLACE_HOLDER = "EX: wash to car";
      const INPUT_DATA_TEST_ID = "data-test-write-todo";

      const inputWriteTask = screen.getByLabelText(INPUT_LABEL_VALUE);
      await waitFor(() => {
        expect(inputWriteTask).toHaveAttribute("id", INPUT_ID);
        expect(inputWriteTask).toHaveAttribute("type", INPUT_TYPE);
        expect(inputWriteTask).toHaveAttribute("placeholder", MY_PLACE_HOLDER);
        expect(inputWriteTask).toHaveAttribute(
          "data-testid",
          INPUT_DATA_TEST_ID
        );
        expect(inputWriteTask).toHaveAttribute("value", "");
      });
    });

    it("should be able render `button` and your attributes", async () => {
      const BUTTON_ID = "button-add-todo";
      const BUTTON_TYPE = "button";
      const BUTTON_VALUE = "ADD";
      const BUTTON_DATA_TESTID = "data-test-button-add-todo";

      const getButtonAdd = screen.getByLabelText("ADD your todo");

      await waitFor(() => {
        expect(getButtonAdd).toHaveAttribute("id", BUTTON_ID);
        expect(getButtonAdd).toHaveAttribute("type", BUTTON_TYPE);
        expect(getButtonAdd).toHaveAttribute("value", BUTTON_VALUE);
        expect(getButtonAdd).toHaveAttribute("data-testid", BUTTON_DATA_TESTID);

        expect(getButtonAdd).toBeDisabled();
      });
    });
  });

  describe("check functions conditionals and states", () => {
    const INPUT_MY_LABEL_TEXT = "Write you task here";
    const BUTTON_LABEL_TEXT = "ADD your todo";

    it("should be able typing task in input", async () => {
      const user = userEvent.setup();
      const valueForWriteTask = "verify pull request";

      render(
        <TodoProvider>
          <InputsTodo />
        </TodoProvider>
      );

      const getMyInputWithLabel = screen.getByLabelText(INPUT_MY_LABEL_TEXT);

      expect(getMyInputWithLabel).toBeInTheDocument();
      expect(getMyInputWithLabel).toHaveValue("");

      await user.type(getMyInputWithLabel, valueForWriteTask);

      expect(getMyInputWithLabel).toHaveValue(valueForWriteTask);
    });

    it("should be able typing task and active button for add", async () => {
      const user = userEvent.setup();
      const myGenericValueForWriteTask = "study english";

      render(
        <TodoProvider>
          <InputsTodo />
        </TodoProvider>
      );

      const getMyInputWithLabel = screen.getByLabelText(INPUT_MY_LABEL_TEXT);
      const getMyButtonWithLabel = screen.getByLabelText(BUTTON_LABEL_TEXT);

      expect(getMyInputWithLabel).toHaveValue("");
      expect(getMyButtonWithLabel).toBeDisabled();

      await user.type(getMyInputWithLabel, myGenericValueForWriteTask);

      await waitFor(() => {
        expect(getMyInputWithLabel).toHaveValue(myGenericValueForWriteTask);
        expect(getMyButtonWithLabel).not.toBeDisabled();
      });
    });

    it("should be able add task written in `input` text and add with `button`", async () => {
      const user = userEvent.setup();
      const myGenericValueForWriteTask = "study software designer";

      render(
        <TodoProvider>
          <InputsTodo />
        </TodoProvider>
      );

      const getMyInputWithLabel = screen.getByLabelText(INPUT_MY_LABEL_TEXT);
      const getMyButtonWithLabel = screen.getByLabelText(BUTTON_LABEL_TEXT);

      expect(getMyInputWithLabel).toHaveValue("");
      await user.type(getMyInputWithLabel, myGenericValueForWriteTask);

      expect(getMyButtonWithLabel).not.toBeDisabled();
      await user.click(getMyButtonWithLabel);

      await waitFor(() => {
        expect(getMyInputWithLabel).toHaveValue("");
        expect(getMyButtonWithLabel).toBeDisabled();
      });
    });
  });
});
