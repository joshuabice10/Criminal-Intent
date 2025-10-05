import { createContext, useState } from "react";

type ThemeColors = {
  mainColor: string;
  pageColor: string;
  textColor: string;
  boxTextColor: string;
};

type ThemeContextType = ThemeColors & {
  setColor: (colors: Partial<ThemeColors>) => void;
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  mainColor: "blueviolet",
  pageColor: "white",
  textColor: "black",
  boxTextColor: "white",
  setColor: () => {},
});

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState({
    mainColor: "blueviolet",
    pageColor: "white",
    textColor: "black",
    boxTextColor: "white",
  });

  const setColor = (colors: Partial<ThemeColors>) => {
    setTheme((prev) => ({ ...prev, ...colors }));
  };

  return (
    <ThemeContext.Provider value={{ ...theme, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
