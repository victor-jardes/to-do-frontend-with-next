import { EmptyListComponent } from "@/app/(todo)/components/emptyList/EmptyListComponent";
import { render, screen, waitFor } from "@testing-library/react";

describe("test `EmptyListComponent`", () => {
  it("should render `empty component` when not contain tasks in list, and verify your attributes too", async () => {
    const TEXT_IN_EMPTY_PARAGRAPH = "EMPTY...";

    render(<EmptyListComponent />);

    const getParagraph = screen.getByText(TEXT_IN_EMPTY_PARAGRAPH);

    expect(getParagraph).toHaveAttribute("id", "empty-value");
    expect(getParagraph).toHaveAttribute(
      "data-testid",
      "data-test-empty-value"
    );

    await waitFor(() => {
      expect(getParagraph.tagName).toBe("P");
      expect(getParagraph.innerHTML).toBe(TEXT_IN_EMPTY_PARAGRAPH);
    });
  });
});
