'use client';
import { useState, createContext } from 'react';
import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import { getMuiTheme } from './mui-theme';

type ThemeContextProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  darkMode: true,
  toggleDarkMode: () => {},
});

export function MuiThemeRegistry({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((p) => !p);
  };

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui', prepend: true }}>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <ThemeProvider theme={getMuiTheme(darkMode ? 'dark' : 'light')}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </NextAppDirEmotionCacheProvider>
  );
}
