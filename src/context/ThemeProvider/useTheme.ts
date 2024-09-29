import React from 'react';

export type Theme = 'dark' | 'light';
type useThemeReturnType = [Theme, toggleTheme: () => void];

export function useTheme(initialTheme: Theme): useThemeReturnType {
  const [theme, setTheme] = React.useState<Theme>(initialTheme);

  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  return [theme, toggleTheme];
}
