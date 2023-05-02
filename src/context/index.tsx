import { ReactNode } from "react";
import SaleProvider from "./salleContext";
import { DataUserProvider } from "./userContext";
import DashboardProvider from "./DashboardContext";
import ProductProvider from "./ProductContext";
import CommentProvider from "./CommentContext";

interface iProvider {
  children: ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return (
    <DataUserProvider>
      <DashboardProvider>
        <SaleProvider>
          <ProductProvider>
            <CommentProvider>{children}</CommentProvider>
          </ProductProvider>
        </SaleProvider>
      </DashboardProvider>
    </DataUserProvider>
  );
};
