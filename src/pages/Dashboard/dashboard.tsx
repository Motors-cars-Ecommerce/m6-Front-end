import Footer from "../../components/Footer/Footer";
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard";
import { HeaderComponet } from "../../components/Header/Header";
import { TitleBoxComponent } from "../../components/TitleBox/TitleBox";
import { DashboardStyled, NavSectionStyled } from "./styles";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import { NewAdModal } from "../../components/NewAdModal/NewAdModal";

const Dashboard = () => {
  return (
    <>
      <HeaderComponet />
      <NewAdModal />
      <TitleBoxComponent />
      <DashboardStyled>
        <section>
          <NavBar />
          <div className="container-card">
            <ul>
              <HomeCarCard />
              <HomeCarCard />
              <HomeCarCard />
            </ul>
          </div>
          <NavSectionStyled>
            <button className="button-filter-dashboard">Filtros</button>
            <div>
              <h2>1</h2>
              <h3>de 2</h3>
            </div>
            <span>
              <h4>Seguinte {">"} </h4>
            </span>
          </NavSectionStyled>
        </section>

        <Footer />
      </DashboardStyled>
    </>
  );
};

export default Dashboard;
