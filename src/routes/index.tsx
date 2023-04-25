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
import ModalCadastre from "../components/ModalCadastre";
import Login from "../pages/LoginPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<ModalCadastre />} />
      <Route path="/detail" element={<ProductPage />} />
      <Route path="/" element={<Login/>}/>
    </Routes>
  );
};
