import { ButtonFinishedTask } from "@/app/todo/components/list/listWithTodos/components/ButtomFinishedTask.button";
import { ITodo } from "@/types/ITodo";
import { render, screen, waitFor } from "@testing-library/react";

const firstTodo: ITodo[] = [
  {
    id: "1",
    isFinished: false,
    description: "study english",
  },
];

describe("render `ButtonFinishedTask` component", () => {
  it("should be able render with correct `attr`", async () => {
    const BUTTON_TEST_ID = "data-test-button-complet-1";
    const BUTTON_FIRST_ID = `button-complet-${firstTodo[0]["id"]}`;
    const BUTTON_VALUE = firstTodo[0]["id"];
    const BUTTON_TYPE = "button";
    const BUTTON_TEXT = "COMPLET";

    render(<ButtonFinishedTask id={firstTodo[0]["id"]} />);

    await waitFor(() => {
      const GET_BUTTON = screen.getByText(BUTTON_TEXT);

      expect(GET_BUTTON.getAttribute("data-testid")).toBe(BUTTON_TEST_ID);
      expect(GET_BUTTON.getAttribute("type")).toBe(BUTTON_TYPE);
      expect(GET_BUTTON.getAttribute("id")).toBe(BUTTON_FIRST_ID);
      expect(GET_BUTTON.getAttribute("value")).toBe(BUTTON_VALUE);
      expect(GET_BUTTON.innerHTML).toBe(BUTTON_TEXT);
    });
  });
});
