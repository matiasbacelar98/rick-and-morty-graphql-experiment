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
      <div
        className={
          theme === 'dark'
            ? 'dark bg-slate-800 text-white'
            : 'bg-white text-slate-700'
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
