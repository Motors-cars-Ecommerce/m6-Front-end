import { useContext } from "react";
import { ButtonGeneric } from "../../styles/componets/buttons/buttons";
import HomeCarCard from "../HomeCarCard/HomeCarCard";
import { AnnounceDiv } from "./styles";
import { DataUserContext } from "../../context/userContext";

export const AnnounceComponent = ({ car }: any) => {
  const { user } = useContext(DataUserContext);
  return (
    <AnnounceDiv key={car.id}>
      <HomeCarCard key={car.id} car={car} />
      {user?.id == car.user.id ? (
        <div className="div-button-actions">
          <ButtonGeneric>Editar</ButtonGeneric>
          <ButtonGeneric>Ver detalhe</ButtonGeneric>
        </div>
      ) : (
        <></>
      )}
    </AnnounceDiv>
  );
};
