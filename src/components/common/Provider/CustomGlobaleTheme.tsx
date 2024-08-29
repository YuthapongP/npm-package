import { useTheme } from "./ThemeProvider";
import GlobalStylesStyleComponent from "./GlobalStyles";

export default function StyledGlobalStyle() {
  const theme = useTheme();
  return <GlobalStylesStyleComponent theme={theme?.theme} />;
}
