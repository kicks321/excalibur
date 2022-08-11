import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
