import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/dashboard";
import HomeCarCard from "../components/HomeCarCard/HomeCarCard";
import NavBar from "../components/NavBarDesktop/NavBarDesktop";
import CardProduct from "../components/CardProduct";
import InfoProduct from "../components/InfoProduct";
import CardDescription from "../components/CardDescription";
import CardComment from "../components/CardComment";
import InputComment from "../components/InputComment";
import ProductPage from "../pages/ProductPage";
import { SalerPage } from "../pages/SelerPage";
import ModalCadastre from "../components/ModalCadastre";
import Login from "../pages/LoginPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<ModalCadastre />} />
      <Route path="/detail" element={<ProductPage />} />
<<<<<<< HEAD
      <Route path="/" element={<Login/>}/>
=======
      <Route path="/saler" element={<SalerPage />} />
>>>>>>> 824d11ccf6f3fbe21ad9978724e8b9c1c35ff85b
    </Routes>
  );
};
