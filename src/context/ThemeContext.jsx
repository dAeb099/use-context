import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const ToggleTheme = () => {
    setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{theme, ToggleTheme}}>{children}</ThemeContext.Provider>;
};
