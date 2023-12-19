import { StyledActionsButton } from "./styles/actionsButton.style";

interface PropsComponent {
  text: string;
}

export function ActionsButton({ text }: PropsComponent) {
  return <StyledActionsButton>{text}</StyledActionsButton>;
}
