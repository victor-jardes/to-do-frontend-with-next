import { StyledSmallLetters } from "./styles/smallLeters.style";

interface PropsComponent {
  text: string;
}

export function SmallLetters({ text }: PropsComponent) {
  return <StyledSmallLetters>{text}</StyledSmallLetters>;
}
