import '@mui/material/styles';

// https://mui.com/material-ui/customization/palette/#typescript
declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['primary'];
    orange: Palette['primary'];
    pink: Palette['primary'];
    yellow: Palette['primary'];
  }

  interface PaletteOptions {
    green?: PaletteOptions['primary'];
    orange?: PaletteOptions['primary'];
    pink?: PaletteOptions['primary'];
    yellow?: PaletteOptions['primary'];
  }

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    '2xl': true;
  }
}
