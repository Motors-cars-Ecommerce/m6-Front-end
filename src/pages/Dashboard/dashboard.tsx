import Footer from "../../components/Footer/Footer";
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard";
import { DashboardMainStyled, DashboardStyled } from "./styles";
import PageSelect from "../../components/PageSelect/PageSelect";
import NavBarMobile from "../../components/NavBarMobile/NavBarMobile";
import { useContext, useEffect } from "react";
import ModalEditProfile from "../../components/ModalEditProfile/ModalEditProfile";
import ModalEditAddress from "../../components/ModalEditAddress/ModalEditAddress";
import { HeaderComponet } from "../../components/Header/Header";
import NavBarDesktop from "../../components/NavBarDesktop/NavBarDesktop";
import { TitleBoxComponent } from "../../components/TitleBox/TitleBox";
import { DashboardContext } from "../../context/DashboardContext";

const Dashboard = () => {
  const {
    filterMobile,
    modalEditProfile,
    modalEditAddress,
    carsFiltered,
    cars,
    loadCars,
    filterByMinPrice,
    filterByMaxPrice,
  } = useContext(DashboardContext);

  useEffect(() => {
    try {
      loadCars();
    } catch {
      console.log("erro");
    }
  }, []);

  return (
    <DashboardStyled>
      {modalEditProfile && <ModalEditProfile />}
      {modalEditAddress && <ModalEditAddress />}
      <HeaderComponet />
      {!filterMobile ? (
        <>
          <TitleBoxComponent />
          <DashboardMainStyled>
            <section>
              <NavBarDesktop />
              <ul className="container-card">
                {carsFiltered.map((car) => (
                  <HomeCarCard key={car.id} car={car} />
                ))}
              </ul>
            </section>
            <PageSelect />
          </DashboardMainStyled>
          <Footer />
        </>
      ) : (
        <NavBarMobile />
      )}
    </DashboardStyled>
  );
};

export default Dashboard;
