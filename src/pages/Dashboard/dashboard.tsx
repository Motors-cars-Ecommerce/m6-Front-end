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
  const {
    filterMobile,
    modalEditProfile,
    modalEditAddress,
    cars,
    setCars,
    carsFiltered,
    setCarsFiltered,
  } = useContext(DashboardContext);

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
      id: "89831263-8b12-4ba2-880e-2dd418343158",
      name: "Matheus",
      email: "matheus@mail.com",
      cpf: "10000000000",
      password: "$2a$10$.SReUiJ4rPPNNF8inY/vnuk2X8Sh7/jiBXiffu2oAyMDfsuJnluRK",
      phone: "199999599",
      birthday: "1995-05-05T06:00:00.000Z",
      seller: true,
      isActive: true,
      createdAt: "2023-04-27T15:13:31.090Z",
      updatedAt: "2023-04-27T15:13:31.090Z",
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
