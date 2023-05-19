import { Navigate, RouteProps } from 'react-router-dom';

import { Home } from 'pages/home';
import { NotFound } from 'pages/notFound';

import { ROUTES } from './routes.enum';

export const AppRoutes: RouteProps[] = [
  {
    path: '/',
    element: <Navigate to={ROUTES.HOME} replace />,
  },
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
];
