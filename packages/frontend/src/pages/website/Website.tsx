import { Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components';

type Props = {
  children?: React.ReactNode;
};

const WebsiteLayout = ({ children }: Props) => {
  return (
    <div className="pageContainer" data-testid="pageContainer">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default WebsiteLayout;
