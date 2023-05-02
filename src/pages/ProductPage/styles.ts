import styled from "styled-components";

const MainStyled = styled.main`
  width: 100vw;
  background: linear-gradient(
    to bottom,
    var(--brand-2) 25%,
    var(--grey-8) 25% 65%
  );
  padding: 53px 0px 15px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 95%;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: unset;

    background: linear-gradient(
      to bottom,
      var(--brand-2) 35%,
      var(--grey-8) 35% 65%
    );

    .product {
      width: 45%;
    }
  }
`;

export { MainStyled };
