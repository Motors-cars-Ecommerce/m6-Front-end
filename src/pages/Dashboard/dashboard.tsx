
import Footer from "../../components/Footer/Footer"
import HomeCarCard from "../../components/HomeCarCard/HomeCarCard"
import { DashboardStyled, NavSectionStyled } from "./styles"

import { LoginButton, SingUpButton } from "../../styles/componets/buttons/buttons"
import { Header, TitleBox } from "../../styles/componets/header"
import { StyledTitle } from "../../styles/componets/typography"
import PhotoGallery from "../../components/PhotosCompartment"


const Dashboard = () => {
    return(

        <DashboardStyled>
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
                <StyledTitle tag="span" color="--whiteFixed" weight={700} size={14} height={0}>SL</StyledTitle>
                <StyledTitle tag="h3" weight={400} size={16} height={28} color="--grey-2">Samuel Leão</StyledTitle>
            </div>
        </Header>
        <TitleBox>
            <img src="src\assets\Photo.png" alt="" />
            <div className="title_box_text">
                <StyledTitle tag="h1" size={44} weight={700} height={56} color="--grey-10">Motors Shop</StyledTitle>
                <StyledTitle tag="h2" size={36} weight={600} height={56} color="--grey-10">A melhor plataforma de anúncios de carros do país</StyledTitle>
            </div>
            
        </TitleBox>
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