import { StyledCardHeader } from "./styles/cardHeader.style";

interface IProps {
  text: string;
}

export function CardHeader({ text }: IProps) {
  return <StyledCardHeader>{text}</StyledCardHeader>;
}
