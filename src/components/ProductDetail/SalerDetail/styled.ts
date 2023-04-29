import styled from "styled-components";

export const StyledDivSaler = styled.div`
  height: 380px;
  width: -webkit-fill-available;
  border-radius: 4px;
  padding: 36px 44px;
  background-color: var(--grey-10);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  h6 {
    margin: 0px;
  }

  .saler_initial {
    width: 104px;
    height: 104px;
    background: var(--brand-1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 120px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 53px;

    color: var(--whiteFixed);
  }

  @media (min-width: 800px) {
    height: 360px;
    width: -webkit-fill-available;
    border-radius: 4px;
    padding: 36px 44px;
    background-color: var(--grey-10);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    h6 {
      margin: 0px;
    }

    .saler_initial {
      width: 104px;
      height: 104px;
      background: var(--brand-1);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 120px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 53px;

      color: var(--whiteFixed);
    }
  }
`;
