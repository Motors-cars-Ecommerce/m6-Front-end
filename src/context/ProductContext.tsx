import { createContext, useContext, useEffect, useState } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";
import { icar } from "./salleContext";

export interface iChildrenProps {
  children: React.ReactNode;
}

interface iProductContext {
  product: icar | null;
  setProduct: React.Dispatch<React.SetStateAction<icar | null>>;
  loadProduct: (productId: string) => Promise<void>;
}

export const ProductContext = createContext({} as iProductContext);

const ProductProvider = ({ children }: iChildrenProps) => {
  const [product, setProduct] = useState<icar | null>(null);

  const navigate = useNavigate();

  const loadProduct = async (productId: string) => {
    const { data } = await api.get(`/cars/${productId}`);
    setProduct(data);
    navigate("/detail");
  };

  const contextValue = { product, loadProduct, setProduct };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
