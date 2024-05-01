import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import ErrorPage from '@/error-page';
import Login from '@/routes/not-protected/login';
import NotProtectedRoot from '@/routes/not-protected/not-protected-root';
import Register from '@/routes/not-protected/register';

import './index.css';

const routesForNotAuthenticatedOnly = [
  {
    path: '/',
    element: <NotProtectedRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to='/login' />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
];

// const routesForAuthenticatedOnly = [
//   {
//     path: '/',
//     element: <ProtectedRoot />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: '/cart',
//         element: <div>Cart</div>,
//       },
//     ],
//   },
// ];

const router = createBrowserRouter([...routesForNotAuthenticatedOnly]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
