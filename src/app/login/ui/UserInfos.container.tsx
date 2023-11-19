import { StyledUserInfosContainer } from "./styles/userInfosContainer.style";
import { IComponentChildren } from "@/types/IComponentChildren";

export function UserInfosContainer({ children }: IComponentChildren) {
  return <StyledUserInfosContainer>{children}</StyledUserInfosContainer>;
}
