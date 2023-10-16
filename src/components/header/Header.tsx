'use client';
import { Paper, Toolbar } from '@mui/material';

import { AuctionCoinLogo } from '@/components/header/AuctionCoinLogo';
import { ThemeButton } from '@/components/header/ThemeButton';

const Header = () => {
  return (
    <Paper
      component="header"
      square
      elevation={4}
      className="sticky left-0 right-0 top-0 z-20 bg-primary"
    >
      <Toolbar
        component="nav"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <AuctionCoinLogo />
        </div>
        <ThemeButton />
      </Toolbar>
    </Paper>
  );
};

export { Header };
