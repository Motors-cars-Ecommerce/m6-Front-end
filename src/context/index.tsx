import { ReactNode } from "react";
import SaleProvider from "./salleContext";
import DashboardProvider from "./DashboardContext";

interface iProvider {
  children: ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return (
  <DashboardProvider>
    <SaleProvider>{children}</SaleProvider>;
  </DashboardProvider>
  )
};
