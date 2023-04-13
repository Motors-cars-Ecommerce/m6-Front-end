import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/dashboard";
import HomeCarCard from "../components/HomeCarCard/HomeCarCard";
import NavBar from "../components/NavBar/NavBar";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
