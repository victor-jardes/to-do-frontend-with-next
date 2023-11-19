import { StyledTitleText } from "./styles/titleText.style";

interface PropsComponent {
  text: string;
}

export function TitleText({ text }: PropsComponent) {
  return <StyledTitleText>{text}</StyledTitleText>;
}
