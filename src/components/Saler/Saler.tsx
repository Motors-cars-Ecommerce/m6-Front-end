import { SellerSectionComponent } from "./styles";
import { StyledTitle } from "../../styles/componets/typography";
import { NewAdModal } from "../NewAdModal/NewAdModal";
import { useContext } from "react";
import { SallerContext } from "../../context/salleContext";
import { DataUserContext } from "../../context/userContext";
import { SucessAdModal } from "../sucessAdModal";

export const Saller = () => {
  const { saller } = useContext(SallerContext);
  const { user } = useContext(DataUserContext);

  return (
    <SellerSectionComponent>
      <div className="div-section-seller">
        <div className="div-seller-detail">
          <div className="image-seller">
            <StyledTitle
              tag="h2"
              color="--whiteFixed"
              weight={500}
              size={36}
              height={53}
            >
              {saller?.name[0]}
            </StyledTitle>
          </div>
          <div className="seller-name">
            <StyledTitle
              tag="h3"
              weight={600}
              size={20}
              height={25}
              color="--grey-1"
            >
              {saller?.name}
            </StyledTitle>
            <StyledTitle
              tag="span"
              size={14}
              weight={500}
              height={24}
              color="--brand-1"
            >
              Anunciante
            </StyledTitle>
          </div>
          <StyledTitle
            tag="span"
            weight={400}
            size={16}
            height={28}
            color="--grey-2"
          >
            {saller?.description}
          </StyledTitle>
          {user?.seller && user?.id == saller?.id ? (
            <NewAdModal key={user?.id} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <SucessAdModal />
    </SellerSectionComponent>
  );
};
