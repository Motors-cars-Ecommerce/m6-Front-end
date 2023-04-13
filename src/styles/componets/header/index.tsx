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

    .header_user{
        display:none;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px;
        gap: 8px;
        width: 313px;
        height: 79px;

        span{
            height: 32px;
            width: 32px;
            border-radius: 150px;
            background:var(--brand-2);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`


export const TitleBox = styled.section`
    width: 100vw;
    height: 40vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    position: relative;

    img{
        width: 100%;
        position: absolute;
        max-height: 403px;
        z-index: -1;
        min-width: 970px;
        max-width: 1080px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .title_box_text{
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
        height: 100%;

        h1, h2{
            margin:0px;
        }
    }

`