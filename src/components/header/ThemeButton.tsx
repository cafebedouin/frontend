import { useContext } from 'react';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import IconButton from '@mui/material/IconButton';

import { ThemeContext } from '@/components/theme-registry/MuiThemeRegistry';

const ThemeButton = () => {
  // Use context hook to access the current theme and the toggle function
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  // Return an icon button that changes the theme on click
  return (
    <IconButton
      onClick={toggleDarkMode}
      className={`hover:opacity-70 ${
        darkMode ? 'hover:text-indigo-500' : 'hover:text-orange-500'
      }`}
    >
      {darkMode ? <NightsStayIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export { ThemeButton };
