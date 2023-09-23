import { IComponentChildren } from "@/types/IComponentChildren";

export function ListWithTodos({ children }: IComponentChildren) {
  return (
    <>
      <ul
        id="list-with-todos"
        role="list"
        data-testid="data-test-list-with-todos"
      >
        {children}
      </ul>
    </>
  );
}
