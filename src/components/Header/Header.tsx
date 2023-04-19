import {
  LoginButton,
  SingUpButton,
} from "../../styles/componets/buttons/buttons";
import { Header } from ".";
import { StyledTitle } from "../../styles/componets/typography";
import ShowMenu from "./script";

export const HeaderComponet = () => {
  return (
    <Header>
      <div className="header_tittle">
        <StyledTitle tag="h2">Motors </StyledTitle>
        <StyledTitle tag="h3">shop</StyledTitle>
      </div>
      <div className="header_buttons">
        <LoginButton>Fazer Login</LoginButton>
        <SingUpButton>Cadastrar</SingUpButton>
      </div>
      <div className="header_user">
        <StyledTitle
          tag="span"
          color="--whiteFixed"
          weight={700}
          size={14}
          height={0}
        >
          SL
        </StyledTitle>
        <StyledTitle
          tag="h3"
          weight={400}
          size={16}
          height={28}
          color="--grey-2"
        >
          Samuel Leão
        </StyledTitle>
      </div>
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
