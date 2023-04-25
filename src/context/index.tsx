import { ReactNode } from "react";
import SaleProvider from "./salleContext";
import { DataUserProvider } from "./userContext";
import DashboardProvider from "./DashboardContext";

interface iProvider {
  children: ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return (
    <DataUserProvider>
      <DashboardProvider>
        <SaleProvider>{children}</SaleProvider>;
      </DashboardProvider>
    </DataUserProvider>
  );
};
