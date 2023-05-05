import { useContext } from "react";
import { ButtonGeneric } from "../../styles/componets/buttons/buttons";
import HomeCarCard from "../HomeCarCard/HomeCarCard";
import { AnnounceDiv } from "./styles";
import { DataUserContext } from "../../context/userContext";
import { ProductContext } from "../../context/ProductContext";
import { CommentContext } from "../../context/CommentContext";
import { Saller } from "../Saler/Saler";
import { SallerContext } from "../../context/salleContext";
import { EditAdModal } from "./EditAnnounce";
import { DeleteAdModal } from "./DeleteAnnounceModal";

export const AnnounceComponent = ({ car }: any) => {
  const { user } = useContext(DataUserContext);
  const { loadProduct } = useContext(ProductContext);
  const { loadComments } = useContext(CommentContext);
  const { setEditAdModal, setAdId } = useContext(SallerContext);

  const editProduct = (carId: string) => {
    setAdId(carId);
    setEditAdModal(true);
  };

  const toDetail = (carID: string) => {
    loadComments(carID);
    loadProduct(carID);
  };

  return (
    <AnnounceDiv key={car.id}>
      <EditAdModal />
      <DeleteAdModal />
      <HomeCarCard key={car.id} car={car} />
      {user?.id == car.user.id ? (
        <div className="div-button-actions">
          <ButtonGeneric onClick={() => editProduct(car.id)}>
            Editar
          </ButtonGeneric>
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
