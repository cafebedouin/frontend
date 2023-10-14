'use client';

import { useContext } from 'react';

import { Switch } from '@mui/material';

import { ThemeContext } from '@/components/theme-registry/MuiThemeRegistry';

const ThemeButton = () => {
  // Use context hook to access the current theme and the toggle function
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  // Return a switch button that changes the theme on click
  return (
    <Switch checked={darkMode} onChange={toggleDarkMode} color="secondary" />
  );
};

export { ThemeButton };
