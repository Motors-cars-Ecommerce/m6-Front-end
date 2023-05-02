import styled from "styled-components";

const ContainerStyled = styled.div`
  width: -webkit-fill-available;
  background-color: var(--grey-10);
  border-radius: 4px;
  padding: 28px 44px;

  height: 355px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: -webkit-fill-available;
    max-width: -webkit-fill-available;
  }

  @media (min-width: 800px) {
  }
`;

export { ContainerStyled };
