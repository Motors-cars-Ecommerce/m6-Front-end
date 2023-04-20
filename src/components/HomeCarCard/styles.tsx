import styled from "styled-components";

export const CarCardStyled = styled.li`
  min-width: 312px;
  max-width: 312px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  figure {
    background-color: var(--grey-7);
    width: 100%;
    height: 152px;
    display: flex;
    flex-direction: row-reverse;
    margin: 0 auto;

    position: relative;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;

      width: 15px;
      height: 27px;
      background-color: var(--random-7);
      color: var(--whiteFixed);

      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 2px;

      position: absolute;

      /* display: none; */ // aqui o display será alterado conforme regra de negócio do valor fipe
    }

    img {
      width: 100%;
      height: 100%;
      background-color: var(--grey-7);
      object-fit: cover; 
    }
  }


  @media (min-width: 800px) {
    
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
    background: var(--brand-2); // essa cor será sortida
    border-radius: 150px;
    color: var(--whiteFixed);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 0px;
  }
`;

export const CarDataStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    h2 {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 4px 8px;
      gap: 10px;

      background: var(--brand-4);
      border-radius: 4px;

      flex: none;
      order: 0;
      flex-grow: 0;

      width: 35px;
      height: 24px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 24px;

      color: var(--brand-1);

      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }

  h3 {
    width: 105px;
    height: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--gray-1);
  }
`;
