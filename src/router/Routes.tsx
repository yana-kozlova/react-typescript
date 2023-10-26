import type { RouteProps } from "react-router-dom";

import { Home } from "pages/home";
import { Login } from "pages/login";
import { NotFound } from "pages/notFound";

import { ROUTES } from "./routes.enum";

import { PrivateRoute } from "../layout";

export const AppRoutes: RouteProps[] = [
  {
    path: ROUTES.HOME,
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
];
