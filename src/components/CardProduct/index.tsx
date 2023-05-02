import { useContext } from "react";
import produto from "../../assets/img-prod.jpg";
import { ContainerStyled } from "./styles";
import { ProductContext } from "../../context/ProductContext";

const CardProduct = () => {
  const { product, getImageModal } = useContext(ProductContext);
  return (
    <ContainerStyled>
      {product?.main_image ? (
        <img
          onClick={() => getImageModal(product?.main_image)}
          src={product?.main_image}
          alt="carro"
        />
      ) : (
        <></>
      )}
    </ContainerStyled>
  );
};

export default CardProduct;
