import { ReactNode } from "react";
import SaleProvider from "./salleContext";
import { DataUserProvider } from "./userContext";

interface iProvider {
  children: ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return (
    <DataUserProvider>
      <SaleProvider>{children}</SaleProvider>
    </DataUserProvider>
  );
};
