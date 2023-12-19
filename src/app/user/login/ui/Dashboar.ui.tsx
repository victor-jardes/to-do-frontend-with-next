import { IComponentChildren } from "@/types/IComponentChildren";
import { StyledDashBoard } from "./styles/dashBoard.style";

export function Dashboard({ children }: IComponentChildren) {
  return <StyledDashBoard>{children}</StyledDashBoard>;
}
