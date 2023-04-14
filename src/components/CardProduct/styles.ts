import styled from "styled-components";

const ContainerStyled = styled.div`
  /* --grey-10 */
  background-color: var(--grey-10);

  max-width: 752px;
  min-width: 375px;
  width: 47%;

  height: 355px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  position: absolute;
  top: 40%;
  left: 30%;

  img {
    max-width: 441px;
    min-width: 293px;
    width: 58%;
  }
`;

export { ContainerStyled };
