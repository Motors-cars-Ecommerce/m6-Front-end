import { useContext } from "react";
import { ArticleStyled } from "./styles";
import { ProductContext } from "../../context/ProductContext";

const CardDescription = () => {
  const { product } = useContext(ProductContext);

  return (
    <ArticleStyled>
      <h2>Descrição</h2>
      <p>{product?.description}</p>
    </ArticleStyled>
  );
};

export default CardDescription;
