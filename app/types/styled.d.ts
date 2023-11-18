import "styled-components";
import { theme } from "../components/styles/Theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
