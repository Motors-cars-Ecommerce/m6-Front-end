import { SectionProductDetail } from "./styled";
import { DivImageDetail } from "./ImageDetail";
import { DivSalerDetail } from "./SalerDetail";
import { ImageModal } from "./ImageDetail/ImageModal";

export const DetailProduct = () => {
  return (
    <SectionProductDetail>
      <DivImageDetail />
      <DivSalerDetail />
      <ImageModal />
    </SectionProductDetail>
  );
};
