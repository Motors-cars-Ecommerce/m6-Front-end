import styled from "styled-components";

export const NavBarStyled = styled.nav`
  /* MOBILE FIRST */

  /* DEFINIT ALTURA MÍNIMA DA CAIXA */
  display: none;


  
  @media (min-width: 800px) {
    min-height: 1600px;
    max-width: 454px;
    min-width: 454px;
    padding-left: 40px;
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      gap: 0px;
    }

    li {
      padding-left: 10px;
      font-family: "Lexend";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
      color: var(--grey-3);
      cursor: pointer;
      max-width: fit-content;
    }

    span {
      display: flex;
      flex-direction: row;
      gap: 30px;

      input {
        border: none;
        width: 125px;
        height: 37px;
        background: var(--grey-5);
        font-family: "Lexend";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: var(--grey-3);

        display: flex;
        align-items: center;
        text-align: center;
      }
    }

    button {
      width: 279px;
      height: 48px;
      background: var(--brand-2);
      border: 1.5px solid var(--brand-2);
      border-radius: 4px;
      font-family: "Inter";
      font-size: 16px;
      color: var(--whiteFixed);
      cursor: pointer;

      margin: 40px 0px;
    }
  }
`;
