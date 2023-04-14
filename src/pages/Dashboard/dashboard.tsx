import Footer from "../../components/Footer/Footer"
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard"
import { DashboardStyled, NavSectionStyled } from "../../components/Header/styles"
import { HeaderComponet } from "../../components/Header/Header"
import { TitleBoxComponent } from "../../components/TitleBox/TitleBox"





const Dashboard = () => {
    return(

        <DashboardStyled>
        <HeaderComponet />
        <TitleBoxComponent />
        <section>
             {/* AQUI VAI A NAVBAR -BARRA DE NAVEGAÇÃO DOS VEICULOS */}
            <div className="container-card">
         <ul>
                    <HomeCarCard/>
                    <HomeCarCard/>
                    <HomeCarCard/>
                </ul>
            </div>
            <NavSectionStyled>
            <button className="button-filter-dashboard" >Filtros</button>
            <div>
                <h2>1</h2>
                <h3>de 2</h3>
            </div>
            <span>
                <h4>Seguinte {'>'} </h4>
            </span>
            </NavSectionStyled>
        </section>
                
        <Footer/>
    </DashboardStyled>
    )
}


export default Dashboard