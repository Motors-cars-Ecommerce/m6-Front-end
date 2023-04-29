import { StyledTitle } from "../../../styles/componets/typography";
import { StyledDivImage } from "./styled";
import produto from "../../../assets/img-prod.jpg";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

export const DivImageDetail = () => {
  const { product } = useContext(ProductContext);

  return (
    <StyledDivImage>
      <StyledTitle tag="h6" weight={600} size={20} height={25} color="--grey-1">
        Fotos
      </StyledTitle>
      <div>
        <ul>
          {product?.images.map((image) => {
            return (
              <li className="image_li">
                <img src={image.image_url} alt="" />
              </li>
            );
          })}
        </ul>
        <ul>
          <li className="image_li">
            <img src={produto} alt="" />
          </li>
          <li className="image_li">
            <img src={produto} alt="" />
          </li>
          <li className="image_li">
            <img src={produto} alt="" />
          </li>
        </ul>
      </div>
    </StyledDivImage>
  );
};
