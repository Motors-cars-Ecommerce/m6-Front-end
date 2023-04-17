import CardComment from "../../components/CardComment";
import CardDescription from "../../components/CardDescription";
import CardProduct from "../../components/CardProduct";
import InfoProduct from "../../components/InfoProduct";
import InputComment from "../../components/InputComment";
import {
  LoginButton,
  SingUpButton,
} from "../../styles/componets/buttons/buttons";
import { Header } from "../../styles/componets/header";
import { StyledTitle } from "../../styles/componets/typography";
import { MainStyled } from "./styles";

const ProductPage = () => {
  return (
    <>
      <Header>
        <div className="header_tittle">
          <StyledTitle tag="h2">Motors </StyledTitle>
          <StyledTitle tag="h3">shop</StyledTitle>
        </div>
        <div className="header_buttons">
          <LoginButton>Fazer Login</LoginButton>
          <SingUpButton>Cadastrar</SingUpButton>
        </div>
        <div className="header_user">
          <StyledTitle
            tag="span"
            color="--whiteFixed"
            weight={700}
            size={14}
            height={0}
          >
            SL
          </StyledTitle>
          <StyledTitle
            tag="h3"
            weight={400}
            size={16}
            height={28}
            color="--grey-2"
          >
            Samuel Leão
          </StyledTitle>
        </div>
      </Header>

      <MainStyled>
        <CardProduct />
        <InfoProduct />
        <CardDescription />
        <CardComment />
        <InputComment />
      </MainStyled>
    </>
  );
};

export default ProductPage;
