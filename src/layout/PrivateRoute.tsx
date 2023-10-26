import type { FC } from "react";

import { Navigate } from "react-router";

import { PrivateLayout } from "./PrivateLayout";

import { useAuthContext } from "../contexts/LoginContext";

interface IPrivateRoute {
  children: JSX.Element;
}

export const PrivateRoute: FC<IPrivateRoute> = ({ children }) => {
  const isAuth = useAuthContext();
  console.log('isAuth', isAuth);

  if (isAuth.user !== null) {
    return <PrivateLayout>{children}</PrivateLayout>;
  }

  return <Navigate to={"/login"} />;
};
