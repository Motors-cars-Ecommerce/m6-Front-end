import styled from "styled-components";

export const CarCardStyled = styled.li`
  width: 312px;
  height: 350px;
  background-color: aqua;
  

  figure {
    background-color: var(--grey-7);
    width: 100%;
    height: 152px;
    background-color: blue;

    display: flex;
    flex-direction: row-reverse;
    margin: 0 auto;

    position: relative;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      line-height: 17px;

      width: 10%;
      height: 27px;
      background-color: var(--random-7);
      color: var(--whiteFixed);

      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 2px;

      position: absolute;

      /* display: none; */
    }

    img {
      width: 100%;
      height: 100%;
      background-color: yellow;
    }

  }

`;

export const UserDataStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 32px;
    height: 32px;

    /* Brand/brand1 */

    background: #4529e6;
    border-radius: 150px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const CarDataStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {

    span {
      width: 34px;
      height: 24px;

      /* Text/body-2-500 */

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      /* identical to box height, or 171% */

      /* Brand/brand1 */

      color: #4529e6;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }
`;
