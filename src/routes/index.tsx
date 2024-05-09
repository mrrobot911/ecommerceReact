import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import ErrorPage from '@/error-page';
import { useAuth } from '@/provider/auth-provider';
import Login from '@/routes/not-protected/login';
import NotProtectedRoot from '@/routes/not-protected/not-protected-root';
import Register from '@/routes/not-protected/register';
import Home from '@/routes/protected/home';
import ProtectedRoot from '@/routes/protected/protected-root';

export default function Routes() {
  const tokenStore = useAuth();

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

  const routesForAuthenticatedOnly = [
    {
      path: '/',
      element: <ProtectedRoot />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/cart',
          element: <div>Cart</div>,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...(!tokenStore?.token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
}
