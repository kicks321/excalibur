import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
};

const WebsiteLayout = ({ children }: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default WebsiteLayout;
