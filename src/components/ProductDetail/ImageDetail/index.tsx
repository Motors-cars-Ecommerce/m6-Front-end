import { StyledTitle } from "../../../styles/componets/typography";
import { StyledDivImage } from "./styled";
import produto from "../../../assets/img-prod.jpg";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { ImageModal } from "./ImageModal";

export const DivImageDetail = () => {
  const { product, getImageModal } = useContext(ProductContext);

  return (
    <StyledDivImage>
      <StyledTitle tag="h6" weight={600} size={20} height={25} color="--grey-1">
        Fotos
      </StyledTitle>
      <section className="image_container">
        {product?.images.map((image) => {
          return (
            <div className="grid-item" key={image.image_url}>
              <img
                src={image.image_url}
                alt="Imagem 1"
                onClick={() => getImageModal(image.image_url)}
              />
            </div>
          );
        })}
      </section>
    </StyledDivImage>
  );
};
