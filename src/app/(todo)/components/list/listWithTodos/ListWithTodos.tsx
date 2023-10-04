import { IComponentChildren } from "@/types/IComponentChildren";

export function ListWithTodos({ children }: IComponentChildren) {
  return (
    <>
      <ul
        style={{ height: "100%" }}
        id="list-with-todos"
        role="list"
        data-testid="data-test-list-with-todos"
      >
        {children}
      </ul>
    </>
  );
}
