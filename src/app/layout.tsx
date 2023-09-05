import TodoProvider from "./context/todoProvider";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/utils/lib/styled-components/registry";
import { GlobalStyle } from "./globals";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "to-do list with next",
  description: "empty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <TodoProvider>{children}</TodoProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
