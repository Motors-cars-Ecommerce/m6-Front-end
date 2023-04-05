import { createGlobalStyle } from 'styled-components'


export const GlobalStyle =  createGlobalStyle`
    body{
        display: flex;
        justify-content: center;

    }
    *{
        list-style: none;
        padding: 0%;
    }
    #root{
        width: 100vw;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
`;