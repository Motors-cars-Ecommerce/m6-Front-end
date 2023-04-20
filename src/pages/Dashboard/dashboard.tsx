import Footer from "../../components/Footer/Footer";
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard";
import { HeaderComponet } from "../../components/Header/Header";
import { TitleBoxComponent } from "../../components/TitleBox/TitleBox";
import { NewAdModal } from "../../components/NewAdModal/NewAdModal";
import { DashboardMainStyled, DashboardStyled } from "./styles";
import NavBarDesktop from "../../components/NavBarDesktop/NavBarDesktop";
import PageSelect from "../../components/PageSelect/PageSelect";
import NavBarMobile from "../../components/NavBarMobile/NavBarMobile";

const Dashboard = () => {

  return (
    <DashboardStyled>
      <NewAdModal />
      <HeaderComponet />
      {/* NavBar Mobile é ativada ao clicar em "Ver anuncios" e desativa do TitleBoxComponent até o Footer */}
      {/* <NavBarMobile/> */}
      <TitleBoxComponent />
      <DashboardMainStyled>
        <section>
          <NavBarDesktop />
          <ul className="container-card">
            <HomeCarCard />
            <HomeCarCard />
            <HomeCarCard />
            <HomeCarCard />
            <HomeCarCard />
            <HomeCarCard />
            <HomeCarCard />
            <HomeCarCard />
            <HomeCarCard />
          </ul>
        </section>
        <PageSelect />
      </DashboardMainStyled>
      <Footer />
    </DashboardStyled>
  );
};

export default Dashboard;
