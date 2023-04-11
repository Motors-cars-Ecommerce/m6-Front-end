import styled from "styled-components";

export const NavBarStyled = styled.nav`
  width: 454px;
  /* DEFINIT ALTURA MÍNIMA DA CAIXA */
  min-height: 1400px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;

  li {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey-3);
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

    margin: 40px 0px;
  }
`;
