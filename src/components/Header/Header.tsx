import {
  LoginButton,
  SingUpButton,
} from "../../styles/componets/buttons/buttons";
import { Header } from ".";
import { StyledTitle } from "../../styles/componets/typography";
import ShowMenu from "./script";
import { useContext, useEffect, useRef, useState } from "react";
import { DataUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { SallerContext } from "../../context/salleContext";

export const HeaderComponet = () => {
  const { user, setUser } = useContext(DataUserContext);
  const { setSaller, getSaler } = useContext(SallerContext);
  const [userOptions, setUserOptions] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /*   useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setUserOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]) */ const navigate = useNavigate();

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

  return (
    <Header>
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
              <div ref={ref} className="user_options">
                <span>Editar Perfil</span>
                <span>Editar Endereço</span>
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
          <SingUpButton>Cadastrar</SingUpButton>
        </div>
      )}

      <div className="div-show-menu" onClick={() => ShowMenu.show()}>
        <input type="checkbox" id="checkbox-menu" />

        <label htmlFor="checkbox-menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <section id="header-section" className="header-section hidden">
        <section className="menu">
          <ul className="div-menu">
            <li>Carros</li>
            <li>Motos</li>
            <li>Leilão</li>
          </ul>
          <div className="div-buttons">
            <LoginButton>Fazer Login</LoginButton>
            <SingUpButton>Cadastrar</SingUpButton>
          </div>
        </section>
      </section>
    </Header>
  );
};
