import { StyledTitle } from "../../styles/componets/typography";
import { CarCardStyled, CarDataStyled, UserDataStyled } from "./styles";
import carro from "./imgs/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png";
import { useContext, useEffect, useState } from "react";
import { SallerContext } from "../../context/salleContext";
import { icar } from "../../interfaces/Car";
import { ProductContext } from "../../context/ProductContext";
import { CommentContext } from "../../context/CommentContext";

const HomeCarCard = ({ car }: any) => {
  const { getSaler, isItAGoodBuy } = useContext(SallerContext);
  const { loadProduct } = useContext(ProductContext);
  const { loadComments } = useContext(CommentContext);
  const [goodBuy, setGoodBuy] = useState(true);

  const toDetail = (carID: string) => {
    loadComments(carID);
    loadProduct(carID);
  };

  useEffect(() => {
    const checkGoodBuy = async () => {
      setGoodBuy(await isItAGoodBuy(car));
    };
    checkGoodBuy();
  }, []);

  return (
    <CarCardStyled>
      <figure onClick={() => toDetail(car.id)}>
        {goodBuy ? <div>$</div> : <></>}
        <img src={car.main_image} alt="" />
      </figure>
      <StyledTitle tag="h2" color="--grey-1" size={16} weight={600} height={20}>
        {car.model_car.branded} - {car.model_car.model}
      </StyledTitle>
      <StyledTitle tag="h3" color="--grey-2" size={14} weight={400} height={24}>
        {car.description}
      </StyledTitle>
      <UserDataStyled onClick={() => getSaler(car?.user?.id)}>
        {/* as letras iniciais dependerão do nome do usuário */}
        <div>{car.user.name[0]}</div>
        <StyledTitle
          tag="h4"
          color="--grey-2"
          size={14}
          weight={500}
          height={24}
        >
          {car.user.name}
        </StyledTitle>
      </UserDataStyled>
      <CarDataStyled>
        <div>
          <h2>{car.km} KM</h2>
          <h2>{car.model_car.year}</h2>
        </div>
        <h3>R$ {car.price}</h3>
      </CarDataStyled>
    </CarCardStyled>
  );
};

export default HomeCarCard;
