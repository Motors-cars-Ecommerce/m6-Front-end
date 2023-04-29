import { useContext } from "react";
import { ShowAdsbutton } from "../../../styles/componets/buttons/buttons";
import { StyledTitle } from "../../../styles/componets/typography";
import { StyledDivSaler } from "./styled";
import { ProductContext } from "../../../context/ProductContext";

export const DivSalerDetail = () => {
  const { product } = useContext(ProductContext);

  return (
    <StyledDivSaler>
      <div className="saler_initial">{product?.user?.name}</div>
      <StyledTitle tag="h6" weight={600} size={20} height={25} color="--grey-1">
        {product?.user?.name}
      </StyledTitle>
      <StyledTitle
        tag="span"
        weight={400}
        size={16}
        height={28}
        color="--grey-2"
      >
        {product?.user?.description}
      </StyledTitle>
      <ShowAdsbutton>Ver todos anuncios</ShowAdsbutton>
    </StyledDivSaler>
  );
};
