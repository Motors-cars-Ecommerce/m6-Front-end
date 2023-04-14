import produto from "../../assets/img-prod.jpg";
import { ContainerStyled } from "./styles";

const CardProduct = () => {
  return (
    <ContainerStyled>
      <img src={produto} alt="carro" />
    </ContainerStyled>
  );
};

export default CardProduct;
