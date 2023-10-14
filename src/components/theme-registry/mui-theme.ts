import { PaletteMode } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import resolveConfig from 'tailwindcss/resolveConfig';

import { Qiucksand } from '@/font';

import tailwindConfigModule from '../../../tailwind.config';

export interface TailwindColors {
  [p: string]: {
    DEFAULT: string;
    light: string;
    dark: string;
  };
}

const tailwindConfig = resolveConfig(tailwindConfigModule);
const themeColors = tailwindConfig?.theme?.colors as TailwindColors;

export const lightPalette: ThemeOptions['palette'] = {
  mode: 'light',
  primary: { main: themeColors?.primary?.light },
  secondary: { main: themeColors?.secondary?.light },
  error: { main: themeColors?.error?.light },
};

export const darkPalette: ThemeOptions['palette'] = {
  mode: 'dark',
  primary: { main: themeColors?.primary?.dark },
  secondary: { main: themeColors?.secondary?.dark },
  error: { main: themeColors?.error?.dark },
};

export const getMuiTheme = (mode: PaletteMode = 'dark') => {
  const muiTheme: ThemeOptions = {
    palette: {
      mode: mode,
      ...(mode === 'light' ? lightPalette : darkPalette),

      green: {
        light: '#3A9E2B',
        main: '#3A9E2B',
      },
      orange: {
        light: themeColors?.orange.light,
        main: themeColors?.orange.DEFAULT,
      },
      pink: {
        light: themeColors?.pink.light,
        main: themeColors?.pink.DEFAULT,
      },
      yellow: {
        light: themeColors?.yellow.light,
        main: themeColors?.yellow.DEFAULT,
      },
    },
    typography: {
      fontFamily: Qiucksand.style.fontFamily,
    },
    breakpoints: {
      values: {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536,
      },
    },
  };

  return createTheme(muiTheme);
};
