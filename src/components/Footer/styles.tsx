import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px 0px;
  width: -webkit-fill-available;

  gap: 40px;

  height: 310px;
  background-color: var(--grey-0);

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  h2 {
    color: var(--whiteFixed);
    font-size: 36px;
  }

  h3 {
    color: var(--whiteFixed);
    padding-top: 15px;
  }

  h4 {
    color: var(--whiteFixed);
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  div {
    background-color: var(--grey-1);
    border-radius: 4px;
    width: 53px;
    height: 50px;

    color: var(--whiteFixed);
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 45px 59px;
    height: 140px;
    width: -webkit-fill-available;
  }
`;
