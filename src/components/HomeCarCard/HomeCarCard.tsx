import { StyledTitle } from "../../styles/componets/typography";

const HomeCarCard = () => {
  return (
    <li>
      <figure>
        <div>$</div>
        <img src="" alt="" />
      </figure>
      <StyledTitle tag="h2" color="--grey-1" size={16} weight={600} height={20}>
        Marca - Modelo
      </StyledTitle>
      <StyledTitle tag="h3" color="--grey-2" size={14} weight={400} height={24}>
        Descrição do Veículo
      </StyledTitle>
      <div>
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
      </div>
      <div>
        <div>
          <span>0 KM</span>
          <span>2019</span>
        </div>
        <span>R$ 112077</span>
      </div>
    </li>
  );
};

export default HomeCarCard;
