import Footer from "../../components/Footer/Footer"
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard"
import { StyledTitle } from "../../styles/componets/typography"
import { DashboardStyled, NavSectionStyled } from "./styles"



const Dashboard = () => {
    return(
        <DashboardStyled>
        <section className="header">
            <h2>motors shop</h2>
            <div>
                <button>fazer login</button>
                <button>Cadastrar</button>
            </div>
        </section>
        <section>
            <h2>Motors Shop</h2>
            <h2>A melhor plataforma de anúncios de carros do país</h2>
        </section>
        <section>
             {/* AQUI VAI A NAVBAR -BARRA DE NAVEGAÇÃO DOS VEICULOS */}
            <div className="products-card">
                <ul>
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