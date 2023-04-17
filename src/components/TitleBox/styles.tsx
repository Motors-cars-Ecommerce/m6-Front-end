import styled from "styled-components";


export const TitleBox = styled.section`

    width: 100vw;
    height: 50vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    position: relative;

    img{
        width: 140%;
        position: absolute;
        z-index: -1;
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
            text-align: center;
        }

        h1{
            font-size: 32px;
            font-weight: 500;
            line-height: 40px;
            letter-spacing: 0em;
            text-align: center;
        }

        h2{
            font-size: 24px;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 0em;
            text-align: center;
        }
    }


    @media ( min-width: 800px ){
        width: 100vw;
        height: 40vh;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
        position: relative;

        img{
            width: 100%;
            position: absolute;
            min-heigth: 450px;
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
                text-align: center;
            }
        }
    }
    

`