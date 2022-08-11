import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
};

const AppsLayout = ({ children }: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppsLayout;
