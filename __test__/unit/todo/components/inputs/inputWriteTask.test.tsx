import InputWriteTask from "@/app/todo/components/inputs/components/InputWriteTask";
import useTaskValue from "@/app/states/todo/useTaskValue";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("render `InputsTodo.test.tsx`", () => {
  describe("check attributes in `text input`", () => {
    it("should be able render `input` and your attributes", async () => {
      const INPUT_ID = "input-for-write-task";
      const INPUT_TYPE = "text";
      const MY_PLACE_HOLDER = "Write your task here";
      const INPUT_DATA_TEST_ID = "data-test-write-todo";

      render(<InputWriteTask />);

      const inputWriteTask = screen.getByPlaceholderText(MY_PLACE_HOLDER);
      await waitFor(() => {
        expect(inputWriteTask).toBeVisible();

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
  });

  describe("checkng interactivity with the `text input`", () => {
    const INPUT_MY_PLACEHOLDER_TEXT = "Write your task here";

    beforeEach(() => {
      useTaskValue.getState().reset();
    });

    it("should be able typing task in input", async () => {
      const user = userEvent.setup();

      const valueForWriteTask = "verify pull request";
      const secondValueForWriteTask = "start the project";

      render(<InputWriteTask />);

      const getMyInputWithPlaceholder = screen.getByPlaceholderText(
        INPUT_MY_PLACEHOLDER_TEXT
      );

      expect(getMyInputWithPlaceholder).toBeInTheDocument();
      expect(getMyInputWithPlaceholder).toHaveValue("");

      await user.type(getMyInputWithPlaceholder, valueForWriteTask);

      await waitFor(() => {
        expect(getMyInputWithPlaceholder).toBeVisible();
        expect(getMyInputWithPlaceholder).toHaveValue(valueForWriteTask);
      });

      await user.clear(getMyInputWithPlaceholder);
      await user.type(getMyInputWithPlaceholder, secondValueForWriteTask);

      await waitFor(() => {
        expect(getMyInputWithPlaceholder).toBeVisible();
        expect(getMyInputWithPlaceholder).toHaveValue(secondValueForWriteTask);
      });
    });
  });
});
