import { StyledCardFooter } from "./styles/cardFooter.style";

interface ICardFooter {
  children: React.ReactNode;
}

export function CardFooter({ children }: ICardFooter) {
  return <StyledCardFooter>{children}</StyledCardFooter>;
}
