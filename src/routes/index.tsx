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
import ModalEditProfile from "../components/ModalEditProfile/ModalEditProfile";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<ModalCadastre />} />
      <Route path="/detail" element={<ProductPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/saler" element={<SalerPage />} />
    </Routes>
  );
};
