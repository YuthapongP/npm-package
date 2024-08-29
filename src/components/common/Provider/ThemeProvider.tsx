import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  darkThemeTokens,
  lightThemeTokens,
  summerThemeTokens,
  springThemeTokens,
} from "..";

export type Themes = {
  light: typeof lightThemeTokens;
  dark: typeof darkThemeTokens;
  summer: typeof summerThemeTokens;
  spring: typeof springThemeTokens;
};

export const themeToken: Themes = {
  summer: summerThemeTokens,
  light: lightThemeTokens,
  dark: darkThemeTokens,
  spring: springThemeTokens,
};

type ThemeContextType = {
  theme: (typeof themeToken)[keyof Themes];
  changeTheme: (theme: keyof Themes) => void;
  currentTheme: keyof Themes;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useTheme = (): ThemeContextType | undefined => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.warn("useTheme must be used within a ThemeProvider");
    return undefined;
  }
  return context;
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Themes[keyof Themes]>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme && themeToken[savedTheme as keyof Themes]
      ? themeToken[savedTheme as keyof Themes]
      : themeToken.light;
  });
  const [currentTheme, setCurrentTheme] = useState<keyof Themes>(() => {
    const savedTheme = localStorage.getItem("theme");
    return (savedTheme as keyof Themes) || "light";
  });

  const changeTheme = (newTheme: keyof Themes) => {
    setTheme(themeToken[newTheme]);
    localStorage.setItem("theme", newTheme);
    setCurrentTheme(newTheme); // Update currentTheme to match new theme
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme && themeToken[savedTheme as keyof Themes]) {
      setTheme(themeToken[savedTheme as keyof Themes]);
      setCurrentTheme(savedTheme as keyof Themes);
    } else {
      setTheme(themeToken.light);
      setCurrentTheme("light");
    }
  }, []);

  const value = useMemo(
    () => ({ theme, changeTheme, currentTheme }),
    [theme, changeTheme, currentTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
