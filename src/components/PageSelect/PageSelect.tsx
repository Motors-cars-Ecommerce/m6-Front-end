import { PageSelectStyled } from "./styles";


const PageSelect = () => {
  return (
    <PageSelectStyled>
      <button className="button-filter-dashboard">Filtros</button>
      <div>
        <h2>1</h2>
        <h3>de 2</h3>
      </div>
      <span>
        <h4>Seguinte {">"} </h4>
      </span>
    </PageSelectStyled>
  );
};

export default PageSelect;
