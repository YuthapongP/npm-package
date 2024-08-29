export interface Typography {
  fontFamily: string;
}

export interface Spacing {
  small: string;
  medium: string;
  large: string;
}

export interface CommonTokens {
  typography: Typography;
  spacing: Spacing;
}

export interface Primary {
  main: string;
  light: string;
  dark: string;
}
export interface Secondary {
  main: string;
  light: string;
  dark: string;
}

export interface Text {
  mainText: string;
  secondaryText: string;
}

export interface Colors {
  primary: Primary;
  secondary: Secondary;
  background: string;
  accent: Primary;
  text: Text;
}

export interface CustomDefaultTheme extends CommonTokens {}

export interface LightThemeTokens extends CommonTokens {
  colors: Colors;
}
export interface DarkThemeTokens extends CommonTokens {
  colors: Colors;
}
export interface SummerThemeTokens extends CommonTokens {
  colors: Colors;
}
export interface SpringThemeTokens extends CommonTokens {
  colors: Colors;
}
