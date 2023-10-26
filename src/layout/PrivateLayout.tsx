import type { FC, ReactNode } from "react";

interface IPrivateLayoutProps {
  children?: ReactNode;
}

export const PrivateLayout: FC<IPrivateLayoutProps> = ({ children }) => {
  return <>{children}</>;
};
