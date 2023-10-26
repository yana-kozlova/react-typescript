import { Route, type RouteProps, Routes } from "react-router-dom";

import { AppRoutes } from "router/Routes";

interface CreateRouteType {
  createRoute: ({ element, path }: RouteProps) => JSX.Element;
}

const useRouter = (): CreateRouteType => {
  const createRoute = ({ element, path }: RouteProps): JSX.Element => {
    return <Route path={path} element={element} key={path} />;
  };

  return { createRoute };
};

export const Router = (): JSX.Element => {
  const { createRoute } = useRouter();
  return <Routes>{AppRoutes.map(createRoute)}</Routes>;
};
