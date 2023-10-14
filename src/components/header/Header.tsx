'use client';
import { Paper, Toolbar } from '@mui/material';

import { ThemeButton } from '@/components/header/ThemeButton';

const Header = () => {
  return (
    <Paper component="header" square elevation={4} className="sticky">
      <Toolbar
        component="nav"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <ThemeButton />
      </Toolbar>
    </Paper>
  );
};

export { Header };
