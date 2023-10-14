import { ReactNode } from 'react';

import { Paper } from '@mui/material';

import { MuiThemeRegistry } from '@/components/theme-registry/MuiThemeRegistry';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeRegistry>
      <Paper square>{children}</Paper>
    </MuiThemeRegistry>
  );
};
