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

      <button
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=55${product?.user.phone}&text=Olá! Vi seu anuncio do ${product?.model_car.model} no Motors Shop e queria saber mais sobre o veiculo! Poderia me ajudar?`,
            "_blank"
          )
        }
      >
        Comprar
      </button>
    </SectionStyled>
  );
};

export default InfoProduct;
