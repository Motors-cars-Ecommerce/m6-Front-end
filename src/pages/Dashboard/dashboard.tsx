import Footer from "../../components/Footer/Footer";
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard";
import { HeaderComponet } from "../../components/Header/Header";
import { TitleBoxComponent } from "../../components/TitleBox/TitleBox";
<<<<<<< HEAD
import {
  DashboardStyled,
  NavSectionStyled,
} from "../../components/Header/styles";
import NavBar from "../../components/NavBar/NavBar";
=======
import { DashboardStyled, NavSectionStyled } from "./styles";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import { NewAdModal } from "../../components/NewAdModal/NewAdModal";
>>>>>>> develop

const Dashboard = () => {
  return (
    <>
      <HeaderComponet />
<<<<<<< HEAD

      <DashboardStyled>
        <TitleBoxComponent />
        <section>
          <NavBar/>
=======
      <NewAdModal />
      <TitleBoxComponent />
      <DashboardStyled>
        <section>
          <NavBar />
>>>>>>> develop
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
<<<<<<< HEAD
      </DashboardStyled>
      <Footer />
=======

        <Footer />
      </DashboardStyled>
>>>>>>> develop
    </>
  );
};

export default Dashboard;
