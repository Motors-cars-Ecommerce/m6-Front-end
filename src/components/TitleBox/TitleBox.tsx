import { StyledTitle } from "../../styles/componets/typography"
import { TitleBox } from "./styles"



export const TitleBoxComponent = () => {
    return (
        <TitleBox>
            <img src="src\assets\Photo.png" alt="" />
            <div className="title_box_text">
                <StyledTitle tag="h1" size={44} weight={700} height={56} color="--grey-10">Motors Shop</StyledTitle>
                <StyledTitle tag="h2" size={36} weight={600} height={56} color="--grey-10">A melhor plataforma de anúncios de carros do país</StyledTitle>
            </div>
            
        </TitleBox>
    )
}