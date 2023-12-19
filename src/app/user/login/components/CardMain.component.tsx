import { StyledMainCard } from "./styles/cardMain.style";
import { StyledCentelizerChildrens } from "../ui/styles/userInfosContainer.style";

interface CardMainProps {
  gap: string;
  children: React.ReactNode;
}

export function CardMain({ gap, children }: CardMainProps) {
  return (
    <StyledMainCard>
      <StyledCentelizerChildrens $gap={gap}>
        {children}
      </StyledCentelizerChildrens>
    </StyledMainCard>
  );
}
