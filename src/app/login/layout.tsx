"use client";

import { IComponentChildren } from "@/types/IComponentChildren";
import { ThemeProvider } from "styled-components";
import { Theme } from "../theme";

export default function LoginLayout({ children }: IComponentChildren) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}
