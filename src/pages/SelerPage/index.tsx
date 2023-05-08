import { useContext } from "react";
import { AnnounceComponent } from "../../components/CardAnnounce/Annouce";
import Footer from "../../components/Footer/Footer";
import { HeaderComponet } from "../../components/Header/Header";
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard";
import { NewAdModal } from "../../components/NewAdModal/NewAdModal";
import PageSelect from "../../components/PageSelect/PageSelect";
import { Saller } from "../../components/Saler/Saler";
import { SellerPage } from "./styles";
import { SallerContext } from "../../context/salleContext";
import { StyledTitle } from "../../styles/componets/typography";

export const SalerPage = () => {
  const { cars } = useContext(SallerContext);
  return (
    <SellerPage>
      <HeaderComponet />
      <Saller />

      <ul>
        {cars.length != 0 ? (
          cars?.map((car) => <AnnounceComponent key={car.id} car={car} />)
        ) : (
          <li>
            <StyledTitle tag="h3">
              Você ainda não possui nenhum anuncio criado. Não peca tempo e crie
              seu primeiro!
            </StyledTitle>
          </li>
        )}
      </ul>
      <PageSelect />
      <Footer />
    </SellerPage>
  );
};
