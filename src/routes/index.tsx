import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/dashboard";
import ProductPage from "../pages/ProductPage";
import { SalerPage } from "../pages/SelerPage";
import Login from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/registerPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
import { NewAdModal } from "../components/NewAdModal/NewAdModal";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={< Dashboard/>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/detail" element={<ProductPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/saler" element={<SalerPage />} />
      <Route path="/user/resetPassword/:id" element={<ResetPasswordPage />} />
    </Routes>
  );
};
