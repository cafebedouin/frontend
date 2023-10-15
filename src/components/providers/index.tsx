'use client';
import { ReactNode } from 'react';

import { PaperWrapper } from '@/components/providers/PaperWrapper';
import { MuiThemeRegistry } from '@/components/theme-registry/MuiThemeRegistry';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeRegistry>
      <PaperWrapper>{children}</PaperWrapper>
    </MuiThemeRegistry>
  );
};
