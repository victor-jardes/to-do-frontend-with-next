import { Theme } from "@/app/theme";
import styled from "styled-components";

export type ITheme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
