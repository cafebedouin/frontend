'use client';
import { Paper, Toolbar } from '@mui/material';

import { AuctionCoinLogo } from '@/components/header/AuctionCoinLogo';
import { ThemeButton } from '@/components/header/ThemeButton';

const Header = () => {
  return (
    <Paper component="header" square elevation={4} className="sticky">
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
