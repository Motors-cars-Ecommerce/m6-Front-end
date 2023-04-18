import styled from "styled-components";


export const Header = styled.section`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 8vh;

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

    .hidden{
        display: none !important;
    }

    .header-section{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 2;
        background-color: var(--whiteFixed);
        height: 40vh;
        width: 40vw;
        
    }

    .hidden-menu{
        display: none;
    }

    .listAppear{
        animation: appearFromTopCenter 1s;
    }
    
    .listDesappear{
        animation: desappearFromTopCenter 1s;
    }
    
    .div-menu{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        height: auto;
    }

    .header_buttons, .header_user{
        display: none;
    }
    

    .div-show-menu{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 30px;
    }


    #checkbox-menu{
        position: absolute;
        opacity: 0;
    }
    
    label{
        cursor: pointer;
        position: relative;
        display: block;
        height: 16px;
        width: 21px;
    }
    
    label span{
        position: absolute;
        display: block;
        height: 3px;
        width: 100%;
        border-radius: 30px;
        background: #727272;
        transition: 0.25s ease-in-out;
    }
    
    label span:nth-child(1){
        top: 0;
    }
    
    label span:nth-child(2){
        top: 8px;
    }
    
    label span:nth-child(3){
        top: 16px;
    }
    
    #checkbox-menu:checked + label span:nth-child(1){
        transform: rotate(-45deg);
        top: 8px;
    }
    
    #checkbox-menu:checked + label span:nth-child(2){
        opacity: 0;
    }
    
    #checkbox-menu:checked + label span:nth-child(3){
        transform: rotate(45deg);
        top:8px;
    }

    @media ( min-width: 800px ){
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .div-show-menu{
            display:none;
        }

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
    }

    
`