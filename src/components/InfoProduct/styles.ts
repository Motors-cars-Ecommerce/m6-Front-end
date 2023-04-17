import styled from "styled-components";

const SectionStyled = styled.section`
  max-width: 752px;
  min-width: 375px;
  width: 47%;
  height: 239px;

  background-color: var(--grey-10);
  padding: 28px 44px 28px 44px;
  border-radius: 4px;

  button {
    width: 100px;
    height: 38px;

    margin-top: 24px;

    border-radius: 4px;
    border: none;

    padding: 12px 20px 12px 20px;
    background-color: var(--brand-1);

    cursor: pointer;

    color: var(--whiteFixed);
    font-weight: 600;
    font-size: 14px;
  }
`;

const InfoCardStyled = styled.div`
  margin-top: 41px;
  display: flex;
  justify-content: space-between;

  div {
    width: 115px;
    display: flex;
    /* background-color: black; */
    justify-content: space-between;
  }

  strong {
    font-size: 16px;
    font-weight: 500;
    color: var(--grey-1);
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const YearAndKmStyled = styled.div`
  span {
    width: 50px;
    height: 32px;

    background-color: var(--brand-4);
    color: var(--brand-1);

    font-weight: 500;
    font-size: 14px;

    margin-right: 12px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { SectionStyled, InfoCardStyled, YearAndKmStyled };
