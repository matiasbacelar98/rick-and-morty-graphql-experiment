import React from 'react';
import { ThemeContext } from './ThemeProvider';

export function useThemeContext() {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
}
