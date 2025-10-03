import { createContext, useState } from "react";

type ThemeContextType = {
  color: string;
  setColor: (color: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  color: "blueviolet",
  setColor: () => {},
});

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [color, setColor] = useState("blueviolet");

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
