import { LoginButton, SingUpButton } from "../../styles/componets/buttons/buttons"
import { Header, TitleBox } from "../../styles/componets/header"
import { StyledTitle } from "../../styles/componets/typography"



const Dashboard = () => {
    return(
        <>
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
        <section className="car_section">
            <div className="filters">
                <div className="">
                    <h3>marca</h3>
                    <ul>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div className="">
                    <h3>marca</h3>
                    <ul>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div className="">
                    <h3>modelo</h3>
                    <ul>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div className="">
                    <h3>cor</h3>
                    <ul>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div className="">
                    <h3>ano</h3>
                    <ul>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div className="">
                    <h3>Km</h3>
                    <input placeholder="min"/>
                    <input placeholder="max"/>
                </div>
                <div className="">
                    <h3>preço</h3>
                    <input placeholder="min"/>
                    <input placeholder="max"/>
                </div>
                
            </div>
            <div className="filters">
                <ul>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                </ul>
            </div>
        </section>
    </>
    )
}


export default Dashboard