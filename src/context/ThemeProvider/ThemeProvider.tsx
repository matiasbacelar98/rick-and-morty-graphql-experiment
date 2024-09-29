import React from 'react';
import { useTheme, Theme } from './useTheme';

/** Theme Context */
type ThemeContextType = { theme: Theme; toggleTheme: () => void };
export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme() {},
});

/** Theme Provider */
export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, toggleTheme] = useTheme('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
