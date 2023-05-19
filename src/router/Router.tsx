import { Route, RouteProps, Routes } from 'react-router-dom';

import { AppRoutes } from 'router/Routes';

const useRouter = () => {
  const createRoute = ({ element, path }: RouteProps) => {
    return <Route path={path} element={element} key={path} />;
  };

  return { createRoute };
};

export const Router = () => {
  const { createRoute } = useRouter();
  return <Routes>{AppRoutes.map(createRoute)}</Routes>;
};
