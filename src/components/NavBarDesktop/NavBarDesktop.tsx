import { useContext } from "react";
import { StyledTitle } from "../../styles/componets/typography";
import { NavBarStyled } from "./styles";
import { DashboardContext } from "../../context/DashboardContext";

const NavBarDesktop = () => {
  const {
    carsFiltered,
    filterByBrand,
    filterByModel,
    filterByColor,
    filterByFuel,
    filterByYear,
    resetCarsFiltered,
    setMaxKm,
    setMinPrice,
    setMaxPrice,
    setMinKm,
  } = useContext(DashboardContext);
  const carsBrands = carsFiltered.filter((car, index, self) => {
    return (
      self.findIndex((i) => i.model_car.branded === car.model_car.branded) ===
      index
    );
  });

  const carsModels = carsFiltered.filter((car, index, self) => {
    return (
      self.findIndex((i) => i.model_car.model === car.model_car.model) === index
    );
  });

  const carsColors = carsFiltered.filter((car, index, self) => {
    return self.findIndex((i) => i.color === car.color) === index;
  });

  const carsYear = carsFiltered.filter((car, index, self) => {
    return (
      self.findIndex((i) => i.model_car.year === car.model_car.year) === index
    );
  });

  const carsFuel = carsFiltered.filter((car, index, self) => {
    return (
      self.findIndex((i) => i.model_car.fuel === car.model_car.fuel) === index
    );
  });

  const inputMaxKm = document.getElementById("maxInputKm") as HTMLFormElement;
  const inputMinKm = document.getElementById("minInputKm") as HTMLFormElement;
  const inputMaxPrice = document.getElementById("maxInputKm") as HTMLFormElement;
  const inputMinPrice = document.getElementById("minInputKm") as HTMLFormElement;

  const resetFilters = () => {
    resetCarsFiltered();
    inputMaxKm.value = null;
    inputMinKm.value = null;
    inputMaxPrice.value = null;
    inputMinPrice.value = null;
  };

  return (
    <NavBarStyled>
      <div>
        <StyledTitle className="font"
          tag="h2"
          color="--grey-0"
          size={28}
          weight={600}
          height={35}
        >
          Marca
        </StyledTitle>
        <ul>
          {carsBrands.map((car) => (
            <li
              key={car.id}
              onClick={() => filterByBrand(car.model_car.branded)}
            >
              {car.model_car.branded}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <StyledTitle className="font"
          tag="h2"
          color="--grey-0"
          size={28}
          weight={600}
          height={35}
        >
          Modelo
        </StyledTitle>
        <ul>
          {carsModels.map((car) => (
            <li key={car.id} onClick={() => filterByModel(car.model_car.model)}>
              {car.model_car.model}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <StyledTitle className="font"
          tag="h2"
          color="--grey-0"
          size={28}
          weight={600}
          height={35}
        >
          Cor
        </StyledTitle>
        <ul>
          {carsColors.map((car) => (
            <li key={car.id} onClick={() => filterByColor(car.color)}>
              {car.color}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <StyledTitle className="font"
          tag="h2"
          color="--grey-0"
          size={28}
          weight={600}
          height={35}
        >
          Ano
        </StyledTitle>
        <ul>
          {carsYear.map((car) => (
            <li key={car.id} onClick={() => filterByYear(car.model_car.year)}>
              {car.model_car.year}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <StyledTitle className="font"
          tag="h2"
          color="--grey-0"
          size={28}
          weight={600}
          height={35}
        >
          Combustível
        </StyledTitle>
        <ul>
          {carsFuel.map((car) => (
            <li key={car.id} onClick={() => filterByFuel(car.model_car.fuel)}>
              {car.model_car.fuel}
            </li>
          ))}
        </ul>
      </div>
      <StyledTitle className="font" tag="h2" color="--grey-0" size={28} weight={600} height={35}>
        Km
      </StyledTitle>
      <span className="">
        <input
          id="minInputKm"
          placeholder="Mínima"
          type="number"
          onChange={(e) => setMinKm(parseInt(e.target.value))}
        />
        <input
          placeholder="Máxima"
          id="maxInputKm"
          type="number"
          onChange={(e) => setMaxKm(parseInt(e.target.value))}
        />
      </span>
      <StyledTitle className="font" tag="h2" color="--grey-0" size={28} weight={600} height={35}>
        Preço
      </StyledTitle>
      <span className="">
        <input
          id="minInputPrice"
          placeholder="Mínimo"
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
        />
        <input
          id="maxInputPrice"
          placeholder="Máximo"
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
        />
      </span>
      <button onClick={() => resetFilters()} className="desktop-button">
        Limpar Filtros
      </button>
    </NavBarStyled>
  );
};

export default NavBarDesktop;
