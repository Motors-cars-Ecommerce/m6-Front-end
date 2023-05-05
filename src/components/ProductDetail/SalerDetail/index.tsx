import { useContext } from "react";
import { ShowAdsbutton } from "../../../styles/componets/buttons/buttons";
import { StyledTitle } from "../../../styles/componets/typography";
import { StyledDivSaler } from "./styled";
import { ProductContext } from "../../../context/ProductContext";
import { SallerContext } from "../../../context/salleContext";

export const DivSalerDetail = () => {
  const { product } = useContext(ProductContext);
  const { getSaler } = useContext(SallerContext);

  const goToSaler = () => {
    if (product) {
      if (product.user) {
        if (product?.user?.id) {
          getSaler(product?.user?.id);
        }
      }
    }
  };

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
      <ShowAdsbutton onClick={() => goToSaler()}>
        Ver todos anuncios
      </ShowAdsbutton>
    </StyledDivSaler>
  );
};
