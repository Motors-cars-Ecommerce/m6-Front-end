import { StyledTitle } from "../../styles/componets/typography";
import { CarCardStyled, CarDataStyled, UserDataStyled } from "./styles";
import carro from "./imgs/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"

const HomeCarCard = () => {
  return (
    <CarCardStyled>
      <figure>
        <div>$</div>
        <img src={carro} alt="" />
      </figure>
      <StyledTitle tag="h2" color="--grey-1" size={16} weight={600} height={20}>
        Marca - Modelo
      </StyledTitle>
      <StyledTitle tag="h3" color="--grey-2" size={14} weight={400} height={24}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
      </StyledTitle>
      <UserDataStyled>
      {/* as letras iniciais dependerão do nome do usuário */}
        <div>SL</div> 
        <StyledTitle
          tag="h4"
          color="--grey-2"
          size={14}
          weight={500}
          height={24}
        >
          Samuel Leão
        </StyledTitle>
      </UserDataStyled>
      <CarDataStyled>
        <div>
          <h2>0 KM</h2>
          <h2>2019</h2>
        </div>
        <h3>R$ 112.077,00</h3>
      </CarDataStyled>
    </CarCardStyled>
  );
};

export default HomeCarCard;
