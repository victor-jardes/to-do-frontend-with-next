import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputsTodo from "@/app/(todo)/components/inputs/InputsTodo";
import useTaskValue from "@/app/states/todo/useTaskValue";

describe("<InputsTodo> component test", () => {
  beforeEach(() => {
    useTaskValue.getState().reset();
  });

  describe("check attributes in `input` and `button` tag", () => {
    beforeEach(() => {
      render(<InputsTodo />);
    });

    it("should be able render `input` and your attributes", async () => {
      const INPUT_ID = "input-for-write-task";
      const INPUT_TYPE = "text";
      const MY_PLACE_HOLDER = "Write your task here";
      const INPUT_DATA_TEST_ID = "data-test-write-todo";

      const inputWriteTask = screen.getByPlaceholderText(MY_PLACE_HOLDER);
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

      const getButtonAdd = screen.getByText("ADD your task");

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
    const INPUT_MY_PLACEHOLDER_TEXT = "Write your task here";
    const BUTTON_TEXT = "ADD your task";

    it("should be able typing task in input", async () => {
      const user = userEvent.setup();
      const valueForWriteTask = "verify pull request";

      render(<InputsTodo />);

      const getMyInputWithPlaceholder = screen.getByPlaceholderText(
        INPUT_MY_PLACEHOLDER_TEXT
      );

      expect(getMyInputWithPlaceholder).toBeInTheDocument();
      expect(getMyInputWithPlaceholder).toHaveValue("");

      await user.type(getMyInputWithPlaceholder, valueForWriteTask);

      expect(getMyInputWithPlaceholder).toHaveValue(valueForWriteTask);
    });

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
