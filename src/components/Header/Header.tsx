import {
  LoginButton,
  SingUpButton,
} from "../../styles/componets/buttons/buttons";
import { Header } from ".";
import { StyledTitle } from "../../styles/componets/typography";
import { useContext, useEffect, useRef, useState } from "react";
import { DataUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { SallerContext } from "../../context/salleContext";
import { DashboardContext } from "../../context/DashboardContext";
import ModalEditProfile from "../ModalEditProfile/ModalEditProfile";
import ModalEditAddress from "../ModalEditAddress/ModalEditAddress";


export const HeaderComponet = () => {
  const { user, setUser } = useContext(DataUserContext);
  const { setModalEditProfile, setModalEditAddress, modalEditProfile, modalEditAddress } = useContext(DashboardContext)
  const { setSaller, getSaler } = useContext(SallerContext);
  const [userOptions, setUserOptions] = useState(false);
  const [menuOptions, setMenuOptions] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const setMenuMobile = () => {
    setMenuOptions(!menuOptions);
    console.log(menuOptions);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setSaller(null);
    navigate("/");
  };

  const toLogin = () => {
    navigate("/login");
  };

  const toDashboard = () => {
    navigate("/");
  };

  const toRegister = () => {
    navigate("/register");
  }

  return (
    <Header>
            { modalEditProfile && <ModalEditProfile/> }
            { modalEditAddress && <ModalEditAddress/> }
      <div className="header_tittle" onClick={toDashboard}>
        <StyledTitle tag="h2">Motors </StyledTitle>
        <StyledTitle tag="h3">shop</StyledTitle>
      </div>
      {user ? (
        <div className="header_div_user">
          <div
            className="header_user"
            onClick={() => setUserOptions(!userOptions)}
          >
            <StyledTitle
              tag="span"
              color="--whiteFixed"
              weight={700}
              size={14}
              height={0}
            >
              T
            </StyledTitle>
            <StyledTitle
              tag="h3"
              weight={400}
              size={16}
              height={28}
              color="--grey-2"
            >
              {user.name}
            </StyledTitle>
          </div>
          {userOptions ? (
            <>
              <div className="user_options">
                <span onClick={()=> setModalEditProfile(true)} >Editar Perfil</span>
                <span onClick={()=> setModalEditAddress(true)} >Editar Endereço</span>
                {user?.seller ? (
                  <span onClick={() => getSaler(user.id)}>Meus Anuncios</span>
                ) : (
                  <></>
                )}

                <span onClick={logout}>Sair</span>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="header_buttons">
          <LoginButton onClick={toLogin}>Fazer Login</LoginButton>
          <SingUpButton onClick={toRegister}>Cadastrar</SingUpButton>
        </div>
      )}
      <div className="div_mobile">
        <div className="div-show-menu">
          <input type="checkbox" id="checkbox-menu" />
          <label htmlFor="checkbox-menu" onClick={setMenuMobile}>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        {menuOptions ? (
          <div className="menu_options_mobile">
            {!user ? (
              <>
                <LoginButton onClick={toLogin}>Fazer Login</LoginButton>
                <SingUpButton onClick={toRegister} className="singup">Cadastrar</SingUpButton>
              </>
            ) : (
              <>
                <div className="user_options_mobile">
                <span onClick={()=> setModalEditProfile(true)} >Editar Perfil</span>
                <span onClick={()=> setModalEditAddress(true)} >Editar Endereço</span>
                  {user?.seller ? (
                    <span onClick={() => getSaler(user.id)}>Meus Anuncios</span>
                  ) : (
                    <></>
                  )}

                  <span onClick={logout}>Sair</span>
                </div>
              </>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </Header>
  );
};
