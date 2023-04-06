import styled from "styled-components";


export const Header = styled.section`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .header_tittle{

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 5px;

        background: linear-gradient(90deg, #0B0D0D -1.61%, #4529E6 100.99%);
        -webkit-background-clip: text;
        color: transparent;

        h2, h3{
            margin: 0px;
        }
    }

    .header_buttons{
        display: flex;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px;
        gap: 44px;
        width: 313px;
        height: 79px;
        border-left: 1.5px solid var(--grey-4);
        justify-content: space-around;
    }
`


export const TitleBox = styled.section`
    width: 100vw;
    height: 40vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

    img{
        position: absolute;
        width: 1023px;
        max-height: 403px;
    }

    .title_box_text{
        position: absolute;
        width: 1509px;
    }

`