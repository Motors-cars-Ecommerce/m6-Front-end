import { createContext, useContext, useEffect, useState } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";
import { icar } from "../interfaces/Car";

export interface iChildrenProps {
  children: React.ReactNode;
}

interface iProductContext {
  product: icar | null;
  setProduct: React.Dispatch<React.SetStateAction<icar | null>>;
  loadProduct: (productId: string) => Promise<void>;
  Image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  imageModal: boolean;
  setImageModal: React.Dispatch<React.SetStateAction<boolean>>;
  getImageModal: (imageUrl: string) => void;
}

export const ProductContext = createContext({} as iProductContext);

const ProductProvider = ({ children }: iChildrenProps) => {
  const [product, setProduct] = useState<icar | null>(null);
  const [Image, setImage] = useState("");
  const [imageModal, setImageModal] = useState(false);

  const navigate = useNavigate();

  const loadProduct = async (productId: string) => {
    console.log(productId);
    const { data } = await api.get(`/cars/${productId}`);
    setProduct(data);
    navigate("/detail");
  };

  const getImageModal = (imageUrl: string) => {
    setImage(imageUrl);
    setImageModal(true);
  };

  const contextValue = {
    product,
    loadProduct,
    setProduct,
    Image,
    setImage,
    imageModal,
    setImageModal,
    getImageModal,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
