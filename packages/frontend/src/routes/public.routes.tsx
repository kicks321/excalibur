import React from 'react';
import { RouteObject } from 'react-router-dom';

// Website Routes
const Website = React.lazy(() => import('../pages/website/Website'));
const Landing = React.lazy(() => import('../pages/website/pages/Landing/Landing.page'));

// Authentication Routes
const Auth = React.lazy(() => import('../pages/auth/Auth'));
const Login = React.lazy(() => import('../pages/auth/Login/Login'));
const SignUp = React.lazy(() => import('../pages/auth/SignUp/SignUp'));

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <React.Suspense>
        <Website />
      </React.Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <React.Suspense>
            <Landing />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: (
      <React.Suspense>
        <Auth />
      </React.Suspense>
    ),
    children: [
      {
        path: '/auth/',
        element: (
          <React.Suspense>
            <Login />
          </React.Suspense>
        ),
      },
      {
        path: '/auth/',
        element: (
          <React.Suspense>
            <SignUp />
          </React.Suspense>
        ),
      },
    ],
  },
];
