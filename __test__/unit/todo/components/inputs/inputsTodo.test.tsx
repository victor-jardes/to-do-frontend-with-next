import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputsTodo from "@/app/todo/components/inputs/InputsTodo";
import useTaskValue from "@/app/states/todo/useTaskValue";

describe("<InputsTodo> component test", () => {
  beforeEach(() => {
    useTaskValue.getState().reset();
  });

  describe("check functions conditionals and states", () => {
    const INPUT_MY_PLACEHOLDER_TEXT = "Write your task here";
    const BUTTON_TEXT = "ADD your task";

    it("should be able typing task and active button for add", async () => {
      const user = userEvent.setup();
      const myGenericValueForWriteTask = "study english";

      render(<InputsTodo />);

      const getMyInputWithLabel = screen.getByPlaceholderText(
        INPUT_MY_PLACEHOLDER_TEXT
      );
      const getMyButtonWithLabel = screen.getByText(BUTTON_TEXT);

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

      render(<InputsTodo />);

      const getMyInputWithLabel = screen.getByPlaceholderText(
        INPUT_MY_PLACEHOLDER_TEXT
      );
      const getMyButtonWithLabel = screen.getByText(BUTTON_TEXT);

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
