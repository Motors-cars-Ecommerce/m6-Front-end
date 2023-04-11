import HomeCarCard from "../../components/HomeCarCard/HomeCarCard"
import { StyledTitle } from "../../styles/componets/typography"



const Dashboard = () => {
    return(
        <>
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
                    LI DOS VEÍCULOS
                </ul>
            </div>
        </section>
    </>
    )
}


export default Dashboard