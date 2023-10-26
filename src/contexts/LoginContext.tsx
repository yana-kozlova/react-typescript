import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { FC } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth, useAxiosFetch } from "../hooks";

// @ts-expect-error context
const AuthContext = createContext();

interface IAuthProvider {
  children: JSX.Element;
}

// TODO not finished logic
export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  const token = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [ data,,,fetchData ] = useAxiosFetch({
    method: "GET",
    url: "/posts",
  });
  
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  // call this function when you want to authenticate the user
  const login = async (email: string, password: string): Promise<void> => {
    // setUser();
    await fetchData();
    // navigate("dashboard");
  };

  // call this function to sign out logged in user
  const logout = (): void => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): any => {
  return useContext(AuthContext);
};
