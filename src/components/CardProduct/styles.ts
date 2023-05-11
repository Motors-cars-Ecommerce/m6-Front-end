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
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  @media (min-width: 800px) {
  }
`;

export { ContainerStyled };
