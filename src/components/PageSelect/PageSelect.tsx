import { useContext } from "react";
import { PageSelectStyled } from "./styles";
import { DashboardContext } from "../../context/DashboardContext";


const PageSelect = () => {

  const {setFilterMobile} = useContext(DashboardContext);


  return (
    <PageSelectStyled>
      <button onClick={()=> setFilterMobile(true)} className="button-filter-dashboard">Filtros</button>
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
