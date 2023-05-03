import { SectionStyled, InfoCardStyled, YearAndKmStyled } from "./styles";
import { ProductContext } from "../../context/ProductContext";
import { useContext } from "react";
const InfoProduct = () => {
  const { product } = useContext(ProductContext);

  return (
    <SectionStyled>
      <h2>
        {product?.model_car.branded} {product?.model_car.model}
      </h2>

      <InfoCardStyled>
        <div>
          <YearAndKmStyled>
            <span>{product?.model_car.year}</span>
          </YearAndKmStyled>

          <YearAndKmStyled>
            <span>{product?.km} KM</span>
          </YearAndKmStyled>
        </div>

        <strong>R$ {product?.price}</strong>
      </InfoCardStyled>

      <button>Comprar</button>
    </SectionStyled>
  );
};

export default InfoProduct;
