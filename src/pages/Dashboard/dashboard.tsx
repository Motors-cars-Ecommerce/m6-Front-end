import Footer from "../../components/Footer/Footer";
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard";
import { HeaderComponet } from "../../components/Header/Header";
import { TitleBoxComponent } from "../../components/TitleBox/TitleBox";
import { DashboardMainStyled, DashboardStyled } from "./styles";
import NavBarDesktop from "../../components/NavBarDesktop/NavBarDesktop";
import PageSelect from "../../components/PageSelect/PageSelect";
import NavBarMobile from "../../components/NavBarMobile/NavBarMobile";
import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import ModalEditProfile from "../../components/ModalEditProfile/ModalEditProfile";
import ModalEditAddress from "../../components/ModalEditAddress/ModalEditAddress";

const Dashboard = () => {
  const { filterMobile, modalEditProfile, modalEditAddress } =
    useContext(DashboardContext);

  const datacar = {
    id: "0342ffee-0a74-4498-94ef-a949c617f460",
    km: 300000,
    price: 50000,
    color: "Cinza",
    description: "Teste de descrição",
    main_image:
      "https://th.bing.com/th/id/OIP.oniOt0X5V-I4txeFU9MycwHaEI?w=291&h=180&c=7&r=0&o=5&pid=1.7",
    model_car: {
      id: "f90ad86d-8c3a-479d-ade5-639aaece0076",
      branded: "citroën",
      model: "aircross 100 anos 1.6 flex 16v aut.",
      year: "2020",
      fuel: "Gasolina",
    },
    user: {
      id: "ceda5dff-aba5-4d9e-a8a4-573b307edfa3",
      name: "Matheus",
      email: "matheus@mail.com",
      cpf: "10012220201",
      password: "$2a$10$3QnOa0ZvReiRyLOTEE4Bu.Jq4jAwe.vs.WEdjE/g4hsp3S1UuZd6m",
      phone: "199999599",
      description: "teste de descrição para usuario",
      birthday: "1995-05-05T06:00:00.000Z",
      seller: true,
      isActive: true,
      createdAt: "2023-05-03T18:17:02.285Z",
      updatedAt: "2023-05-03T18:17:02.285Z",
    },
    comments: [],
    images: [
      {
        id: "beb7d890-9774-48a6-be7b-7f78e67f2af7",
        image_url:
          "https://th.bing.com/th/id/OIP.fweYEGhcPjsf6oXekAV0yQHaEK?w=283&h=180&c=7&r=0&o=5&pid=1.7",
      },
    ],
  };

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
