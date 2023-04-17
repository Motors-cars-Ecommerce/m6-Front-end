import { SectionStyled, InfoCardStyled, YearAndKmStyled } from "./styles";

const InfoProduct = () => {
  return (
    <SectionStyled>
      <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h2>

      <InfoCardStyled>
        <div>
          <YearAndKmStyled>
            <span>2013</span>
          </YearAndKmStyled>

          <YearAndKmStyled>
            <span>0 KM</span>
          </YearAndKmStyled>
        </div>

        <strong>R$ 00.000,00</strong>
      </InfoCardStyled>

      <button>Comprar</button>
    </SectionStyled>
  );
};

export default InfoProduct;
