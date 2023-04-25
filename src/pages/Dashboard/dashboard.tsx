import Footer from "../../components/Footer/Footer";
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard";
import { HeaderComponet } from "../../components/Header/Header";
import { TitleBoxComponent } from "../../components/TitleBox/TitleBox";
import { DashboardMainStyled, DashboardStyled } from "./styles";
import NavBarDesktop from "../../components/NavBarDesktop/NavBarDesktop";
import PageSelect from "../../components/PageSelect/PageSelect";
import NavBarMobile from "../../components/NavBarMobile/NavBarMobile";

const Dashboard = () => {
  const car = {
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
    comments: [
      {
        id: "775f2b8e-5f90-416c-b9d2-bc3620ff250f",
        text: "teste comentario",
      },
    ],
    images: [
      {
        id: "2d866ac7-10d3-404b-b27a-f364ca56f97b",
        image_url: "teste1",
      },
      {
        id: "3252c5e8-509a-4d55-ad00-31d356febd67",
        image_url: "teste2",
      },
      {
        id: "897699b4-2c16-4ebd-943f-8171bf83c83d",
        image_url: "teste3",
      },
      {
        id: "1642f3b7-40b8-4e3c-b2c6-4d7ceb69a0f0",
        image_url: "teste1",
      },
      {
        id: "3e4f6dea-4341-43cf-87c5-e8a12ccd24c8",
        image_url: "teste2",
      },
      {
        id: "c4e90773-9d3e-418f-9bd4-3eea4e846a7e",
        image_url: "teste3",
      },
    ],
  };

  return (
    <DashboardStyled>
      <HeaderComponet />
      {/* NavBar Mobile é ativada ao clicar em "Ver anuncios" e desativa do TitleBoxComponent até o Footer */}
      {/* <NavBarMobile/> */}
      <TitleBoxComponent />
      <DashboardMainStyled>
        <section>
          <NavBarDesktop />
          <ul className="container-card">
            <HomeCarCard car={car} />
            <HomeCarCard car={car} />
            <HomeCarCard car={car} />
            <HomeCarCard car={car} />
          </ul>
        </section>
        <PageSelect />
      </DashboardMainStyled>
      <Footer />
    </DashboardStyled>
  );
};

export default Dashboard;
