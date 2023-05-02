import { useContext } from "react";
import produto from "../../assets/img-prod.jpg";
import { ContainerStyled } from "./styles";
import { ProductContext } from "../../context/ProductContext";

const CardProduct = () => {
  const { product } = useContext(ProductContext);
  return (
    <ContainerStyled>
      <img src={product?.main_image} alt="carro" />
    </ContainerStyled>
  );
};

export default CardProduct;
