'use client';

import { ReactNode, useContext } from 'react';

import { Paper } from '@mui/material';

import { ThemeContext } from '@/components/theme-registry/MuiThemeRegistry';

const PaperWrapper = ({ children }: { children: ReactNode }) => {
  // Use context hook to access the current theme
  const { darkMode } = useContext(ThemeContext);

  return (
    <Paper
      elevation={8}
      square
      className={`pb-8 ${darkMode ? 'dark' : 'light'}`}
    >
      {children}
    </Paper>
  );
};

export { PaperWrapper };
