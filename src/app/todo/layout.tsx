import HeaderContainer from "./components/header/components/Header.container";
import HeaderLayout from "./components/header/layout";

export default function TodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderLayout>
        <HeaderContainer />
      </HeaderLayout>
      {children}
    </>
  );
}
