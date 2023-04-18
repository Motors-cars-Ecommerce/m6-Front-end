import Footer from "../../components/Footer/Footer";
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard";
import { HeaderComponet } from "../../components/Header/Header";
import { TitleBoxComponent } from "../../components/TitleBox/TitleBox";
import { DashboardMainStyled, DashboardStyled } from "./styles";
import NavBarDesktop from "../../components/NavBarDesktop/NavBarDesktop";
import PageSelect from "../../components/PageSelect/PageSelect";
import NavBarMobile from "../../components/NavBarMobile/NavBarMobile";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <HeaderComponet />
      <TitleBoxComponent />
      <DashboardMainStyled>
        <section>
          <NavBarDesktop />
          <NavBarMobile/>
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
