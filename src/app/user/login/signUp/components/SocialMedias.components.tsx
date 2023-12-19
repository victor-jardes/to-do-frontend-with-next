import { SmallLetters } from "@/app/user/login/components/SmallLetters.component";

type SocialMediasProps = {
  text: string;
};

export default function SocialMedias({ text }: SocialMediasProps) {
  return (
    <>
      <p>icons</p>
      <SmallLetters text={text} />
    </>
  );
}
