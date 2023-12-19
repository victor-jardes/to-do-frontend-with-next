import { StyledCentelizerChildrens } from "../ui/styles/userInfosContainer.style";
import { StyledCardFooter } from "./styles/cardFooter.style";

interface ICardFooter {
  gap: string;
  children: React.ReactNode;
}

export function CardFooter({ gap, children }: ICardFooter) {
  return (
    <StyledCardFooter>
      <StyledCentelizerChildrens $gap={gap}>
        {children}
      </StyledCentelizerChildrens>
    </StyledCardFooter>
  );
}
