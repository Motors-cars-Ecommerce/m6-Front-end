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
      <section className="image_container">
        {product?.images.map((image) => {
          return (
            <div className="grid-item">
              <img src={image.image_url} alt="Imagem 1" />
            </div>
          );
        })}
      </section>
    </StyledDivImage>
  );
};
