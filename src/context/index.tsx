import { ReactNode } from "react";
import SaleProvider from "./salleContext";

interface iProvider {
  children: ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return <SaleProvider>{children}</SaleProvider>;
};
