import { ListWithTodos } from "@/app/(todo)/components/list/listWithTodos/ListWithTodos";
import { render, screen } from "@testing-library/react";

describe.only("test `ListWithTodos` component", () => {
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
});
