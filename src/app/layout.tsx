import TodoProvider from "./context/todoProvider";
import "./globals.css";
import { Inter } from "next/font/google";

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
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  );
}
