import Footer from "../../components/Footer/Footer";
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard";
import { HeaderComponet } from "../../components/Header/Header";
import { TitleBoxComponent } from "../../components/TitleBox/TitleBox";
import { NewAdModal } from "../../components/NewAdModal/NewAdModal";
import { DashboardMainStyled, DashboardStyled } from "./styles";
import NavBarDesktop from "../../components/NavBarDesktop/NavBarDesktop";
import PageSelect from "../../components/PageSelect/PageSelect";
import NavBarMobile from "../../components/NavBarMobile/NavBarMobile";
import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";

const Dashboard = () => {
  const { setFilterMobile, filterMobile } = useContext(DashboardContext);

  const datacar = {
    id: "edd6ed65-3e56-42cd-886e-f175206cf665",
    km: 50000,
    price: 400000,
    color: "Preto",
    description: "O Uno é um automóvel co…",
    main_image:
      "https://cdn.autopapo.com.br/box/uploads/2021/08/11162502/fiat-uno-furgao-branco-de-frente-1920x1268.jpg",
    model_car: {
      id: "53b0328a-015f-4fcf-a9ae-a70b9a7928a6",
      branded: "Fiat",
      model: "Uno",
      year: "2006",
      fuel: "Etanol",
    },
    user: {
      id: "f2b684cd-fc07-4bc6-8a73-80be024447c9",
      name: "Matheus",
      email: "matheus@mail.com",
      cpf: "10000000000",
      password: "$2a$10$WlpRn3E1hmbjSJJ2kcVhPe.lpmCi5y1irwcUcsSU6U79PQHA5MigW",
      phone: "199999599",
      birthday: "1995-05-05T06:00:00.000Z",
      seller: true,
      isActive: true,
      createdAt: "2023-04-19T23:08:16.148Z",
      updatedAt: "2023-04-19T23:08:16.148Z",
    },
  };

  return (
    <DashboardStyled>
      <HeaderComponet />
      {!filterMobile ? (
        <>
          <TitleBoxComponent />
          <DashboardMainStyled>
            <section>
              <NavBarDesktop />
              <ul className="container-card">
                <HomeCarCard key={datacar.id} car={datacar} />
                <HomeCarCard key={datacar.id} car={datacar} />
                <HomeCarCard key={datacar.id} car={datacar} />
                <HomeCarCard key={datacar.id} car={datacar} />
                <HomeCarCard key={datacar.id} car={datacar} />
                <HomeCarCard key={datacar.id} car={datacar} />
                <HomeCarCard key={datacar.id} car={datacar} />
                <HomeCarCard key={datacar.id} car={datacar} />
                <HomeCarCard key={datacar.id} car={datacar} />
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
