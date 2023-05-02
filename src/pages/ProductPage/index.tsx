import CardComment from "../../components/CardComment";
import CardDescription from "../../components/CardDescription";
import CardProduct from "../../components/CardProduct";
import InfoProduct from "../../components/InfoProduct";
import InputComment from "../../components/InputComment";
import {
  LoginButton,
  ShowAdsbutton,
  SingUpButton,
} from "../../styles/componets/buttons/buttons";
import { StyledTitle } from "../../styles/componets/typography";
import { MainStyled } from "./styles";
import { TestModal } from "../../components/testModal";
import { HeaderComponet } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import produto from "../../assets/img-prod.jpg";
import { useEffect, useState } from "react";
import { DetailProduct } from "../../components/ProductDetail";

const ProductPage = () => {
  const [isMobile, setMobile] = useState(
    window.innerWidth < 800 ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 800 ? true : false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HeaderComponet />
      <MainStyled>
        <section className="product">
          <CardProduct />
          <InfoProduct />
          <CardDescription />
          <CardComment />
          {isMobile ? <DetailProduct /> : <></>}
          <InputComment />
        </section>
        {!isMobile ? <DetailProduct /> : <></>}
      </MainStyled>
      <Footer />
    </>
  );
};

export default ProductPage;
