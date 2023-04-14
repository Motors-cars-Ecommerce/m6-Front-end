import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/dashboard";
import HomeCarCard from "../components/HomeCarCard/HomeCarCard";
import NavBar from "../components/NavBar/NavBar";
import CardProduct from "../components/CardProduct";
import InfoProduct from "../components/InfoProduct";

export const RoutesMain = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Dashboard />} /> */}
      <Route path="/" element={<InfoProduct />} />
    </Routes>
  );
};
