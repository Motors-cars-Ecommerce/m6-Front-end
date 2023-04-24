import { ButtonGeneric } from "../../styles/componets/buttons/buttons";
import HomeCarCard from "../HomeCarCard/HomeCarCard";
import { AnnounceDiv } from "./styles";

export const AnnounceComponent = ({ car }: any) => {
  return (
    <AnnounceDiv key={car.id}>
      <HomeCarCard key={car.id} car={car} />
      <div className="div-button-actions">
        <ButtonGeneric>Editar</ButtonGeneric>
        <ButtonGeneric>Ver detalhe</ButtonGeneric>
      </div>
    </AnnounceDiv>
  );
};
