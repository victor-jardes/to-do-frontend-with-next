import { StyledSmallLetters } from "./styles/smallLeters.style";

interface PropsComponent {
  text: string;
  alignBaseline?: boolean;
}

export function SmallLetters({ text, alignBaseline }: PropsComponent) {
  return (
    <StyledSmallLetters $alignBaseline={alignBaseline}>
      {text}
    </StyledSmallLetters>
  );
}
