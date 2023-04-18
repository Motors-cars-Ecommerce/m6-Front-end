import Footer from "../../components/Footer/Footer";
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard";
import { HeaderComponet } from "../../components/Header/Header";
import { TitleBoxComponent } from "../../components/TitleBox/TitleBox";
import { DashboardMainStyled } from "./styles";
import NavBarDesktop from "../../components/NavBarDesktop/NavBarDesktop";
import PageSelect from "../../components/PageSelect/PageSelect";

const Dashboard = () => {
  return (
    <>
      <HeaderComponet />
      <TitleBoxComponent />
      <DashboardMainStyled>
        <section>
          <NavBarDesktop />
          <div className="container-card">
            <ul>
              <HomeCarCard />
              <HomeCarCard />
              <HomeCarCard />
            </ul>
          </div>
        </section>
        <PageSelect />
      </DashboardMainStyled>
      <Footer />
    </>
  );
};

export default Dashboard;
