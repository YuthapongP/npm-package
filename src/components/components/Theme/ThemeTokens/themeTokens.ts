import {
  CommonTokens,
  DarkThemeTokens,
  LightThemeTokens,
  SpringThemeTokens,
  SummerThemeTokens,
} from "./themeTokens.type";

const commonTokens: CommonTokens = {
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};

const lightThemeTokens: LightThemeTokens = {
  ...commonTokens,
  colors: {
    primary: {
      main: "#CEE5F5",
      light: "#E0F2F1",
      dark: "#0288D1",
    },
    secondary: {
      main: "#FF7043",
      light: "#FFAB91",
      dark: "#D84315",
    },
    accent: {
      main: "#FF5722",
      light: "#FF8A65",
      dark: "#E64A19",
    },
    background: "#F5F5F5",
    text: {
      mainText: "#333333",
      secondaryText: "#757575",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};

const darkThemeTokens: DarkThemeTokens = {
  ...commonTokens,
  colors: {
    primary: {
      main: "#333333",
      light: "#4F4F4F",
      dark: "#1A1A1A",
    },
    secondary: {
      main: "#666666",
      light: "#808080",
      dark: "#4C4C4C",
    },
    accent: {
      main: "#ebebeb",
      light: "#FFFFFF",
      dark: "#b5b0b0",
    },
    background: "#121212",
    text: {
      mainText: "#FFFFFF",
      secondaryText: "#BDBDBD",
    },
  },
};

const summerThemeTokens: SummerThemeTokens = {
  ...commonTokens,
  colors: {
    primary: {
      main: "#FFA726",
      light: "#FFCC80",
      dark: "#FB8C00",
    },
    secondary: {
      main: "#FF7043",
      light: "#FFAB91",
      dark: "#D84315",
    },
    accent: {
      main: "#FF5252",
      light: "#FF867C",
      dark: "#E53935",
    },
    background: "#FFECB3",
    text: {
      mainText: "#333",
      secondaryText: "#666",
    },
  },
};

const springThemeTokens: SpringThemeTokens = {
  ...commonTokens,
  colors: {
    primary: {
      main: "#66BB6A",
      light: "#81C784",
      dark: "#388E3C",
    },
    secondary: {
      main: "#FF7043",
      light: "#FFAB91",
      dark: "#D84315",
    },
    accent: {
      main: "#FFEB3B",
      light: "#FFF59D",
      dark: "#FBC02D",
    },
    background: "#E8F5E9",
    text: {
      mainText: "#333333",
      secondaryText: "#757575",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};

const allThemes = {
  dark: darkThemeTokens,
  light: lightThemeTokens,
  summer: summerThemeTokens,
  spring: springThemeTokens,
};

export {
  lightThemeTokens,
  darkThemeTokens,
  summerThemeTokens,
  springThemeTokens,
  allThemes,
};
