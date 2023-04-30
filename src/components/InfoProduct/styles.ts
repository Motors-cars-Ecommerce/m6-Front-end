import styled from "styled-components";

const SectionStyled = styled.section`
  width: -webkit-fill-available;
  background-color: var(--grey-10);
  border-radius: 4px;
  padding: 28px 44px;

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
    width: auto;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: center;
    gap: 15px;
    padding: 0px 10px;
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
  height: 32px;
  background-color: var(--brand-4);
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: auto;
    margin: 0px;
    color: var(--brand-1);

    font-weight: 500;
    font-size: 1rem;

    border-radius: 4px;
  }
`;

export { SectionStyled, InfoCardStyled, YearAndKmStyled };
