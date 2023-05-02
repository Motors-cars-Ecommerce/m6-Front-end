import { useContext } from "react";
import { ButtonGeneric } from "../../styles/componets/buttons/buttons";
import HomeCarCard from "../HomeCarCard/HomeCarCard";
import { AnnounceDiv } from "./styles";
import { DataUserContext } from "../../context/userContext";
import { ProductContext } from "../../context/ProductContext";
import { CommentContext } from "../../context/CommentContext";

export const AnnounceComponent = ({ car }: any) => {
  const { user } = useContext(DataUserContext);
  const { loadProduct } = useContext(ProductContext);
  const { loadComments } = useContext(CommentContext);

  const toDetail = (carID: string) => {
    loadComments(carID);
    loadProduct(carID);
  };

  return (
    <AnnounceDiv key={car.id}>
      <HomeCarCard key={car.id} car={car} />
      {user?.id == car.user.id ? (
        <div className="div-button-actions">
          <ButtonGeneric>Editar</ButtonGeneric>
          <ButtonGeneric onClick={() => toDetail(car.id)}>
            Ver detalhe
          </ButtonGeneric>
        </div>
      ) : (
        <></>
      )}
    </AnnounceDiv>
  );
};
