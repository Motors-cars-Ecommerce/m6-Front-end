import { useContext } from "react";
import { StyledTitle } from "../../styles/componets/typography";
import { NavBarStyled } from "./styles";
import { DashboardContext } from "../../context/DashboardContext";

const NavBarMobile = () => {

  const { setFilterMobile } = useContext(DashboardContext);

  return (
    <NavBarStyled>
      <section className="content">
      <div className="Mobile-Filter">
        <h2>Filtro</h2>
        <ul>
          <li>Fiat</li>
          <button>x</button>
          <li>Siena</li>
          <button>x</button>
          <li>Brnaca</li>
          <button>x</button>
          <li>2010</li>
          <button>x</button>
          <li>Gasolina</li>
          <button>x</button>
        </ul>
        <button onClick={()=> setFilterMobile(false)} >X</button>
      </div>

      <div>
        <StyledTitle
          tag="h2"
          color="--grey-0"
          size={28}
          weight={600}
          height={35}
        >
          Marca
        </StyledTitle>
        <ul>
          <li>General Motors</li>
          <li>Fiat</li>
          <li>Ford</li>
          <li>Honda</li>
          <li>Porsche</li>
          <li>Volkswagen</li>
        </ul>
      </div>
      <div className="">
        <StyledTitle
          tag="h2"
          color="--grey-0"
          size={28}
          weight={600}
          height={35}
        >
          Modelo
        </StyledTitle>
        <ul>
          <li>Civic</li>
          <li>Corolla</li>
          <li>Cruze</li>
          <li>Fit</li>
          <li>Gol</li>
          <li>Ka</li>
          <li>Onix</li>
          <li>Porsche 781</li>
        </ul>
      </div>
      <div className="">
        <StyledTitle
          tag="h2"
          color="--grey-0"
          size={28}
          weight={600}
          height={35}
        >
          Cor
        </StyledTitle>
        <ul>
          <li>Azul</li>
          <li>Branco</li>
          <li>Cinza</li>
          <li>Prata</li>
          <li>Preto</li>
          <li>Verde</li>
        </ul>
      </div>
      <div className="">
        <StyledTitle
          tag="h2"
          color="--grey-0"
          size={28}
          weight={600}
          height={35}
        >
          Ano
        </StyledTitle>
        <ul>
          <li>2022</li>
          <li>2021</li>
          <li>2018</li>
          <li>2015</li>
          <li>2013</li>
          <li>2012</li>
          <li>2010</li>
        </ul>
      </div>
      <div className="">
        <StyledTitle
          tag="h2"
          color="--grey-0"
          size={28}
          weight={600}
          height={35}
        >
          Combustível
        </StyledTitle>
        <ul>
          <li>Diesel</li>
          <li>Etanol</li>
          <li>Gasolina</li>
          <li>Flex</li>
        </ul>
      </div>
      <StyledTitle tag="h2" color="--grey-0" size={28} weight={600} height={35}>
        Km
      </StyledTitle>
      <span className="">
        <input placeholder="Mínima" />
        <input placeholder="Máxima" />
      </span>
      <StyledTitle tag="h2" color="--grey-0" size={28} weight={600} height={35}>
        Preço
      </StyledTitle>
      <span className="">
        <input placeholder="Mínimo" />
        <input placeholder="Máximo" />
      </span>
      <button className="mobile-button">Ver Anúncios</button>
      </section>
    </NavBarStyled>
  );
};

export default NavBarMobile;
